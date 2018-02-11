const Discord = require("discord.js");
var ClientMod = new Discord.Client({
    "autoreconnect": true
});

exports.run = (client, message, args) => {
    const no = client.emojis.get("385486628610899968");

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    if (message.author.id !== "285399206708117504") return message.channel.send(`${no} Oops! Seems like you tried to run owner only command!`);
    message.delete();
    try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
        message.channel.send(`Input\n` + `${code}\n` + `\nOutput\n` + clean(evaled), {
            code: "xl"
        });
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};