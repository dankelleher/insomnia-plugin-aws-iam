"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const awscred = require('awscred');
const loadAwsCred = util_1.promisify(awscred.load);
var Attribute;
(function (Attribute) {
    Attribute["accessKeyId"] = "accessKeyId";
    Attribute["secretAccessKey"] = "secretAccessKey";
})(Attribute || (Attribute = {}));
exports.templateTags = [
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
        async run(context, attribute) {
            const loadedCredentialObject = await loadAwsCred();
            return loadedCredentialObject.credentials[attribute];
        },
    }
];
