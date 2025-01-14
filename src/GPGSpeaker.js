import * as openpgp from "openpgp";

export class GPGSpeaker
{
    async symmetricalEncrypt(plainText, passkey)
    {
        if (passkey === "") {
            throw Error("No passkey");
        }

        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({text: plainText}),
            passwords: [passkey],
            format: 'armored'
        });

        if (encrypted === undefined) {
            throw Error("Encryption failed. Not sure why.");
        }

        // console.log(encrypted)

        return encrypted;
    }

    async symmetricalDecrypt(armoredText, passkey)
    {
        if (passkey === "") {
            throw Error("No passkey");
        }

        const { data: decrypted } = await openpgp.decrypt({
            message: await openpgp.readMessage({armoredMessage: armoredText}),
            passwords: [passkey],
            format: 'armored'
        });

        if (decrypted === undefined) {
            throw Error("Encryption failed. Not sure why.");
        }

        // console.log(decrypted)

        return decrypted;
    }
}

