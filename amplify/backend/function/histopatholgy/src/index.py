from decimal import Decimal
import json
import boto3
import os
from boto3.dynamodb.types import TypeDeserializer

def from_dynamodb_to_json(item):
    d = TypeDeserializer()
    return {k: d.deserialize(value=v) for k, v in item.items()}

def dynamodb_list_to_json(data):
  return_data = []
  for item in data.get("Items"):
    return_data.append(from_dynamodb_to_json(item))
  return return_data

class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        # 👇️ if passed in object is instance of Decimal
        # convert it to a string
        if isinstance(obj, Decimal):
            return float(obj)
        # 👇️ otherwise use the default behavior
        return json.JSONEncoder.default(self, obj)

client = boto3.client('dynamodb')

table_name = os.getenv('STORAGE_HISTOPATHOLOGY_NAME')

def handler(event, context):

  print(event)
  method = event['httpMethod']
  table = get_table()

  if method == "POST":
    data = json.loads(event['body'])
    client.put_item(
      TableName=table_name,
      Item={
          'id': {
            'S': data['id']
          },
          'name': {
            'S': data['name']
          },
          'user': {
            'S': data['user']
          },
          'workflowStatus': {
            'S': 'CREATED'
          }
      }
    )

    response = {
        'statusCode': 200,
        'body': json.dumps({'id': data['id']}),
        'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    }
    
    return response

  # If it's a PATCH and it's got a workflow id in the URL
  if method == "PATCH":

    path = event['path']
    workflow_id = path.split('/')[2]
    data = json.loads(event['body'])
    status = data['workflowStatus']
    table.update_item(
      TableName=table_name,
      Key={
        'id': workflow_id
      },
      UpdateExpression='SET workflowStatus = :newStatus',
      ExpressionAttributeValues={
        ':newStatus': status
      },
      ReturnValues="UPDATED_NEW"
    )
    response = {
      'statusCode': 200,
      'body': '',
      'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    }
    return response

  if method == "GET":
    data = client.scan(TableName=table_name)    
    response = {
      'statusCode': 200,
      'body': json.dumps(dynamodb_list_to_json(data), cls=DecimalEncoder),
      'headers': {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
    }
    return response


def get_table():
  dynamodb = boto3.resource('dynamodb')
  table = dynamodb.Table(table_name)
  return table
