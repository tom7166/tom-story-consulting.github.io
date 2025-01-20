// security/encrypt.js
import crypto from 'crypto';
import { securityConfig } from './config';

export const encryption = {
    encrypt: (text) => {
        const iv = crypto.randomBytes(securityConfig.encryption.ivLength);
        const salt = crypto.randomBytes(securityConfig.encryption.saltLength);
        
        const key = crypto.pbkdf2Sync(
            securityConfig.encryption.key,
            salt,
            securityConfig.encryption.iterations,
            securityConfig.encryption.keyLength,
            'sha512'
        );

        const cipher = crypto.createCipheriv(
            securityConfig.encryption.algorithm,
            key,
            iv
        );

        const encrypted = Buffer.concat([
            cipher.update(text),
            cipher.final()
        ]);

        const tag = cipher.getAuthTag();

        return {
            iv: iv.toString('hex'),
            content: encrypted.toString('hex'),
            tag: tag.toString('hex'),
            salt: salt.toString('hex')
        };
    },

    decrypt: (encrypted) => {
        const iv = Buffer.from(encrypted.iv, 'hex');
        const content = Buffer.from(encrypted.content, 'hex');
        const tag = Buffer.from(encrypted.tag, 'hex');
        const salt = Buffer.from(encrypted.salt, 'hex');

        const key = crypto.pbkdf2Sync(
            securityConfig.encryption.key,
            salt,
            securityConfig.encryption.iterations,
            securityConfig.encryption.keyLength,
            'sha512'
        );

        const decipher = crypto.createDecipheriv(
            securityConfig.encryption.algorithm,
            key,
            iv
        );
        
        decipher.setAuthTag(tag);

        const decrypted = Buffer.concat([
            decipher.update(content),
            decipher.final()
        ]);

        return decrypted.toString();
    }
};
