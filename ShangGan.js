import fetch from "node-fetch";
import common from '../../lib/common/common.js';
export class example extends plugin {
    constructor() 
    {
        super({
            name: "伤感文案",
            dsc: "这只是个测试！",
            event: "message",
            priority: 5000,
            rule: [
                {
                    reg: "^#(伤感文案|sg)",
                    fnc: "tg",
                },
            ],
        });
    }
    async tg(e) {
        const response = await fetch("http://1087.link/api/sgyl.php");
        if (!response.ok) {
            e.reply("API出了点问题，请联系1982975523");
            return;
        }
        const text = await response.text();
        const res = text.replace(/<[^>]*>/g, "").trim();
        e.reply(res);
    }
}
