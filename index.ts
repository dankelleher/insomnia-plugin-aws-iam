import { promisify } from 'util';
const awscred = require('awscred');

const loadAwsCred = promisify(awscred.load);

enum Attribute {
    accessKeyId = 'accessKeyId',
    secretAccessKey = 'secretAccessKey'
}

export const templateTags = [
    {
        name: 'awsiam',
        displayName: 'awsiam',
        description: 'Insomnia plugin - AWS IAM credential loader',
        args: [{
            displayName: 'Attribute',
            type: 'enum',
            options: [
                {
                    displayName: Attribute.accessKeyId,
                    value: Attribute.accessKeyId,
                },
                {
                    displayName: Attribute.secretAccessKey,
                    value: Attribute.secretAccessKey,
                },
            ]
        }],
        async run(context: object, attribute: Attribute) {
            const loadedCredentialObject = await loadAwsCred();
            return loadedCredentialObject.credentials[attribute];
        },
    }
];
