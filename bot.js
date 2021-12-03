require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN || 8080)
bot.start((ctx) => {
    ctx.reply(`Привет ${ctx.message.from.first_name}`)
    console.log(ctx.message)
})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
    async function request2() {
        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
        const data = await response.json()
        mast1 = 0;
        mast2 = 0;
        mast3 = 0;
        mast4 = 0;
        one_mast1 = 0;
        one_mast2 = 0;
        one_mast3 = 0;
        one_mast4 = 0;
        mastvertPl1 = 0;
        mastvertPl2 = 0;
        mastvertPl3 = 0;
        mastvertPl4 = 0;
        mastvertDil1 = 0;
        mastvertDil2 = 0;
        mastvertDil3 = 0;
        mastvertDil4 = 0;

        //diamonds- буби
        //clubs - крести
        //spades - пики
        //hearts - чирва
        //
        for (let i = 0; i < 4; i++) {
            score_dealer = data.items.results[i].results.card_dealer.suit
            score_player = data.items.results[i].results.card_player.suit

            if ((score_dealer == 'diamonds' || score_dealer == 'hearts')&&(score_player == 'diamonds' || score_player == 'hearts'))
                mast1 = mast1 + 1;

        }

        if (mast1 == 4) { ctx.reply('Чёрных не было 8 карт') }


        for (let i = 0; i < 4; i++) {
            score_dealer = data.items.results[i].results.card_dealer.suit
            score_player = data.items.results[i].results.card_player.suit
            if ((score_dealer == 'clubs' || score_dealer == 'spades')&&(score_player == 'clubs' || score_player == 'spades'))
                mast2 = mast2 + 1;

        }

        if (mast2 == 4) { ctx.reply('Красных не было 8 карт') }



        //игрок
        for (let i = 0; i < 4; i++) {
            score_dealer = data.items.results[i].results.card_dealer.suit
            score_player = data.items.results[i].results.card_player.suit

            if (score_player == 'diamonds' || score_player == 'hearts')
                mastvertDil1 = mastvertDil1 + 1;

        }

        if (mastvertDil1 == 4) { ctx.reply('Нет 4 чёрных у игрока (вертикаль)') }

        for (let i = 0; i < 4; i++) {
            score_dealer = data.items.results[i].results.card_dealer.suit
            score_player = data.items.results[i].results.card_player.suit

            if (score_player === 'clubs' || score_player === 'spades')
                mastvertDil2 = mastvertDil2 + 1;

        }
        if (mastvertDil2 == 4) { ctx.reply('Нет 4 красных игрока (вертикаль)') }





        for (let i = 0; i < 4; i++) {
            score_dealer = data.items.results[i].results.card_dealer.suit
            score_player = data.items.results[i].results.card_player.suit

            if (score_dealer === 'diamonds' || score_dealer === 'hearts')
                mastvertDil3 = mastvertDil3 + 1;

        }

        if (mastvertDil3 == 4) { ctx.reply('Нет 4 чёрных у дилера (вертикаль)') }

        for (let i = 0; i < 4; i++) {
            score_dealer = data.items.results[i].results.card_dealer.suit
            score_player = data.items.results[i].results.card_player.suit

            if (score_dealer === 'clubs' || score_dealer === 'spades')
                mastvertDil4 = mastvertDil4 + 1;

        }
        if (mastvertDil4 == 4) { ctx.reply('Нет 4 красных дилера (вертикаль)') }




    }
    function good() {
        ctx.reply("Вы запустили Бота на стратегию «Масти» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
        ctx.reply("Удачи! По всем вопросам пишите @BetgamesTV_Admin");
        global.time = setInterval(request2, 30000)
    }



    good()
}
)
bot.hears('/end', async (ctx) => {
    try {
        clearInterval(time);

        ctx.reply("Пока");
    } catch (err) {
        ctx.reply("Этот бот и так выключен");
    }
})
bot.launch()

async function request24() {
    const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
    const data = await response.json()
    mast1 = 0;
    mast2 = 0;
    mast3 = 0;
    mast4 = 0;
    one_mast1 = 0;
    one_mast2 = 0;
    one_mast3 = 0;
    one_mast4 = 0;
    mastvertPl1 = 0;
    mastvertPl2 = 0;
    mastvertPl3 = 0;
    mastvertPl4 = 0;
    mastvertDil1 = 0;
    mastvertDil2 = 0;
    mastvertDil3 = 0;
    mastvertDil4 = 0;
    for (let i = 0; i < 3; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer != 'diamonds' && score_player != 'diamonds')
            mast1 = mast1 + 1;

    }

    if (mast1 == 3) { ctx.reply('Буби не было 6 карты') }
    //diamonds- буби
    //clubs - крести
    //spades - пики
    //hearts - чирва
    //
    for (let i = 0; i < 3; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        if (score_dealer != 'clubs' && score_player != 'clubs')
            mast2 = mast2 + 1;

    }
    if (mast2 == 3) { ctx.reply('Крести не было 6 карты') }
    for (let i = 0; i < 3; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        if (score_dealer != 'spades' && score_player != 'spades')
            mast3 = mast3 + 1;

    }

    if (mast3 == 3) { ctx.reply('Пики не было 6 карты') }
    for (let i = 0; i < 3; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer != 'hearts' && score_player != 'hearts')
            mast4 = mast4 + 1;

    }

    if (mast4 == 3) { ctx.reply('Чирвы не было 6 карты') }
    for (let i = 0; i < 2; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer == 'diamonds' && score_player == 'diamonds')
            one_mast1 = one_mast1 + 1;

    }

    if (one_mast1 == 2) { ctx.reply('4 буби подряд') }

    for (let i = 0; i < 2; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        if (score_dealer == 'clubs' && score_player == 'clubs')
            one_mast2 = one_mast2 + 1;

    }

    if (one_mast2 == 2) { ctx.reply('4 крести подряд') }
    for (let i = 0; i < 2; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer == 'spades' && score_player == 'spades')
            one_mast3 = one_mast3 + 1;

    }

    if (one_mast3 == 2) { ctx.reply('4 пики подряд') }
    for (let i = 0; i < 2; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit
        if (score_dealer == 'hearts' && score_player == 'hearts')
            one_mast4 = one_mast4 + 1;

    }

    if (one_mast4 == 2) { ctx.reply('4 чирвы подряд') }


    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer != 'diamonds')
            mastvertDil1 = mastvertDil1 + 1;

    }

    if (mastvertDil1 == 8) { ctx.reply('нет 8 буби у дилера') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer != 'clubs')
            mastvertDil2 = mastvertDil2 + 1;

    }
    if (mastvertDil2 == 8) { ctx.reply('нет 8 крести у дилера') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer != 'spades')
            mastvertDil3 = mastvertDil3 + 1;

    }

    if (mastvertDil3 == 8) { ctx.reply('нет 8 пик у дилера') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_dealer != 'hearts')
            mastvertDil4 = mastvertDil4 + 1;

    }
    if (mastvertDil4 == 8) { ctx.reply('нет 8 чирв у дилера') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_player != 'diamonds')
            mastvertPl1 = mastvertPl1 + 1;

    }
    if (mastvertPl1 == 8) { ctx.reply('нет 8 буби у игрока') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_player != 'clubs')
            mastvertPl2 = mastvertPl2 + 1;

    }

    if (mastvertPl2 == 8) { ctx.reply('нет 8 крестей у игрока') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_player != 'spades')
            mastvertPl3 = mastvertPl3 + 1;

    }

    if (mastvertPl3 == 8) { ctx.reply('нет 8 пик у игрока') }
    for (let i = 0; i < 8; i++) {
        score_dealer = data.items.results[i].results.card_dealer.suit
        score_player = data.items.results[i].results.card_player.suit

        if (score_player != 'hearts')
            mastvertPl4 = mastvertPl4 + 1;

    }
    console.log(mastvertPl4);
    if (mastvertPl4 == 8) { ctx.reply('нет 8 чирв у игрока') }
}

 //diamonds- буби
 //clubs - крести
 //spades - пики
 //hearts - чирва
 //

