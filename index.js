"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateTags = void 0;
const util_1 = require("util");
const awscred = require('awscred');
const loadAwsCred = util_1.promisify(awscred.load);
var Attribute;
(function (Attribute) {
    Attribute["accessKeyId"] = "accessKeyId";
    Attribute["secretAccessKey"] = "secretAccessKey";
    Attribute["sessionToken"] = "sessionToken";
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
                    {
                        displayName: Attribute.sessionToken,
                        value: Attribute.sessionToken,
                    },
                ]
            }, {
                displayName: 'Profile',
                description: 'Profile name',
                type: 'string',
                defaultValue: 'default'
            }],
        async run(context, attribute, profile) {
            const loadedCredentialObject = await loadAwsCred({ 'profile': profile });
            return loadedCredentialObject.credentials[attribute];
        },
    }
];
