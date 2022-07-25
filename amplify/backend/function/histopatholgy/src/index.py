import json
import boto3
import os

client = boto3.client('dynamodb')

table_name = os.getenv('STORAGE_HISTOPATHOLOGY_NAME')

def handler(event, context):
  data = client.put_item(
    TableName=table_name,
    Item={
        'id': {
          'S': event['id']
        },
        'price': {
          'N': '500'
        },
        'name': {
          'S': 'Yeezys'
        }
    }
  )

  response = {
      'statusCode': 200,
      'body': 'successfully created item!',
      'headers': {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
  }
  
  return response
