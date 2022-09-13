export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "samdinofade60ed": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "samdino": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "predictions": {
        "translateText583f49f2": {
            "region": "string",
            "sourceLang": "string",
            "targetLang": "string"
        },
        "speechGeneratorb24672bf": {
            "region": "string",
            "language": "string",
            "voice": "string"
        },
        "identifyText": {
            "region": "string",
            "format": "string"
        }
    },
    "function": {
        "S3Trigger2adb5c30": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "storage": {
        "s3974755d3": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}