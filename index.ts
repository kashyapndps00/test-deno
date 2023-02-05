import { Bot } from "https://deno.land/x/grammy@v1.14.1/mod.ts"
import { load } from "https://deno.land/std/dotenv/mod.ts";

await load({ export: true });
const token = Deno.env.get('BOT_TOKEN');
if(!token) throw Error("BotError: Token is not set");
const bot = new Bot(token)

bot.command("start",ctx=>{
    ctx.reply(`<b>Hello ${ctx.from?.first_name}</b>, This is a test bot made by @Kashyap_back using typescript, deno and grammY.\nIf you find any bugs please send it to me so that I can imporve my bot.`,{
        parse_mode:"HTML"
    });
});

bot.start({
    onStart:(bot)=>{
        console.log(`@${bot.username} Started On Deno`)
    }
});
