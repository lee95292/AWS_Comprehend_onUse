# AWS 구문분석 APi 사용예시
import boto3
import json
 
comprehend = boto3.client(service_name='comprehend', region_name='us-east-1')
text = "It is raining today in Seattle"
 
print('Calling DetectSyntax')
print(json.dumps(comprehend.detect_syntax(Text=text, LanguageCode='en'), sort_keys=True, indent=4))
print('End of DetectSyntax\n')

#AWS CLI
# aws comprehend detect-syntax --region [**Region**] --language-code "en"  --text "It is raining today in Seattle."