#AWS 개체인식 API 사용 예시
import boto3
import json

comprehend = boto3.client(service_name='comprehend', region_name='us-east-1')
text = "한글 테스트입니다 아마존 웹서비스 너무 좋고 간편해요!"

print('Calling DetectEntities')
print(json.dumps(comprehend.detect_entities(Text=text, LanguageCode='ko'), sort_keys=True, indent=4))
print('End of DetectEntities\n')

# AWS CLI
# aws comprehend detect-entities --region "[**Region**]" --language-code "en" --text "[**Text**]It is raining today in Seattle."
