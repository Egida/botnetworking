const { Markup } = require("telegraf")
const XLSX = require('xlsx');
const fs = require('fs');


module.exports = (bot) => {

    bot
    .start(async ctx => {
        if (ctx.chat.type != "private") return;
        return ctx.sendStart()
    })

    bot
    .hears("📌 Главное меню", async ctx => ctx.sendStart())
    .hears("🎭 Мероприятия", async ctx => {
        await ctx.sendBack("🎭")
        await ctx.send(`Первое, что спешим сообщить-это мы ИЗМЕНИЛИ ФОРМАТ мероприятия!
        \nТеперь оно будет проходить в формате: НЕТВОРКИНГ-ВОРКШОП.
        \nДа, мы решили изменить формат. ПОЧЕМУ?\nПришло время выйти на новый уровень. Мы собрали лучший опыт, который накопился за 10 лет в организации бизнес мероприятий, форумов, трансформационных программ, построения бизнеса и готовы поделиться этим с Вами. ПРИГЛАШАЕМ ПОЛУЧИТЬ ЭТИ ЗНАНИЯ!
        \nА КАК это будет? Сейчас расскажем.
        \nНЕТВОРКИНГ - это про полезные связи, которые помогают решать любые жизненные и бизнес задачи.\nВОРКШОП - обучающая мастерская, где упор делается на практическую работу, что позволит прокачать как личностные скилы, так и получить инструменты для роста своего бизнеса
        \n\nИ что я ПОЛУЧУ?- просите Вы.
        \nВСЁ ЛУЧШЕЕ СРАЗУ!\nСильное окружение, заряженных на результат рост, расширение, выгодные партнерства и коллаборации.\nА также перенять опыт сильнейших, кто уже мамонт в своей нише, получить работающие инструменты для реализации, расширения своего бизнеса и мышления.`)
        await ctx.send(`РАСПИСАНИЕ 06.04.23 г.
        \nРЕГИСТРАЦИЯ с 14-30 до 15-00\nНАЧАЛО в 15-00
        \nПервый блок мероприятия с 15-15 до 17-00\nПерерыв на кофе брейк  с 17-00 до 17-30
        \nВторой блок мероприятия с 17-30 до 19-30\nПерерыв с 19-30 до 20-00
        \nФУРШЕТ с 20-00 до 22-00
        \nГотов стать участником! Тогда жми на кнопку "Регистрация и оплата"`)
    })
    .hears("📖 Правила", async ctx => {
        await ctx.sendBack("📖")
        await ctx.send(`Правила группы.\nПрошу всегда использовать ХЭШТЕГИ:\n#визитка - о себе и своем бизнесе, о своих компетенциях, продуктах или услугах\n#могу - про помощь другим\n#ищу - вопрос, связанный с предпринимательской деятельностью, командообразованием, партнерством
        \nПредставится можно по след схеме:\n1. ФИО\n2. Сфера деятельности\n3. С чем и в чем готов помочь\n4. Какие есть запросы, вопросы\n5. Контакты: соц сети или телефон).  
        \n\n❌ЗАПРЕЩЕНО:\n✔Навязчиво рекламировать ваши услуги (рассылки без объяснения причины, в том числе в ЛС участникам чата)\n✔Спамить, грубить\n✔С 23:00 до 08:00 в чат писать запрещено (время покоя)\n✔Размещать ссылки на другие чаты, боты, каналы, ссылки на другие группы\n✔Реклама только после согласования с админом @olga_organizuet.  
        \nБлагодарю, что ознакомился с правилами🙏 Ты сможешь к ним вернуться в любое время, они будут находится в моем меню.`)
        if (ctx.user.registration) {
            ctx.send("Теперь Вы можете писать сообщения в группе!", Markup
      .inlineKeyboard([
          [Markup.button.url("Перейти в чат", ctx.settings.body.chat.invite_link)]])
    )}
    })
    .hears("🔐 Доступ к чату", async ctx => {
        await ctx.sendBack("🔐")
        await ctx.send("Для того чтоб у тебя был полноценный доступ к чату, где ты можешь представится или писать, пройди, пожалуйста, регистрацию. \nЖми 👇", Markup
            .inlineKeyboard([
                [Markup.button.callback("Ответить на вопрос", "go")]
            ])
        )
    })
    .hears("💰 Регистрация и оплата", async ctx => {
        await ctx.sendBack("💰")
        await ctx.send(`Вероятно, ты уже читал(а) в чате, что 9 марта мы празднуем юбилей - 2 года с момента создания первого в Калининграде большого нетворкинга🥳
        \nКратко о мероприятии: 
        \n▫️ 6 АПРЕЛЯ / 15:00 (о месте проведения сообщим отдельно)
        \n▫️ Формат “НЕТВОРКИНГ- ВОРКШОП”.
        \nМы собрали лучший опыт, который накопился за 10 лет в организации бизнес мероприятий, форумов, трансформационных программ, построения бизнеса и соединили несколько смыслов  в одном мероприятии:\n✔️Полезные связи, которые помогают решать любые жизненные и бизнес задачи\n✔️ Обучающая мастерская, где упор делается на практическую работу, что позволит прокачать как личностные скилы, так и получить инструменты для роста своего бизнеса
        \n▫️ Варианты участия:
        \n✔️ СТАНДАРТ - участие в мероприятии, занесение в список участников с контактной информацией, стандартное размещение в зале, раздаточные материалы (блокнот, ручка, персональная водичка), кофе брейк с закусками\nСтоимость 1990
        \n✔️ ПРИВИЛЕГИЯ  - участие в мероприятии, занесение в список участников с контактной информацией, стандартное размещение в зале, раздаточные материалы (блокнот, ручка, персональная водичка), кофе брейк с закусками, размещение рекламного оффера в чате бизнес-сообщества численностью более 500 человек, индивидуальный разбор от бизнес-наставников по систематизации бизнес процессов, фуршет с велком-дринк 🥂 закусками и DJ\nСтоимость 4490
        \n✔️ ПРЕМИУМ - хочешь ВЫСТУПИТЬ НА СЦЕНЕ, ЗАЯВИТЬ О СЕБЕ, СВОИХ КОМПЕТЕНЦИЯХ И О СВОЕМ БИЗНЕСЕ, заполни анкету и мы с тобой свяжемся`, Markup
            .inlineKeyboard([
                [Markup.button.callback("Стандарт", "Стандарт")],
                [Markup.button.callback("Привилегия", "Привилегия")],
                [Markup.button.url("Премиум", "https://forms.gle/E8egTcT16r5W5kMy7")]
            ])
        )
    })

    bot
    .command("sendbase23", async ctx => {
      ctx.replyWithDocument({ source: fs.createReadStream('database/users.json') }, {
          filename: "users.json",
          contentType: "application/json",
      });
    })
    bot.command("v", async ctx => {
        ctx.replyWithHTML(`<strong>Виктор Холостяков</strong> - создание и продвижение сайтов, разработка ботов и программного обеспечения.
        \nСайт: <a href='https://myecard.ru'>myecard.ru</a>
        \nИнстаграм: <a href='https://instagram.com/god_kod_'>god_kod_</a>
        \nЮтуб: <a href='https://www.youtube.com/channel/UC4dqCzBCUdq0pIrv1hHo4FA'>god_kod</a>
        \nДля того чтобы записаться на бесплатную консультацию или аудит Вашего сайта, пишите пожалуйста в телеграм @god_kod`)
    })  

    bot
    .action(/^payment-(\w+)$/, async ctx => {
        const [, type] = ctx.match;
        ctx.deleteMessage()
        if (type === "plus") ctx.send("Ожидайте, с Вами свяжутся")
        ctx.user.edit("payment", ctx.session.type);
        await ctx.telegram.sendMessage(-1001859432020, `Пользователь ${ctx.genMention(ctx.from)}\n${type === "plus" ? `Оплатил мероприятие ${ctx.session.type}` : `Не оплатил мероприятие ${ctx.session.type}`}`)
        // ctx.users.getArray().map(element => {
        //     if (element.is_admin) ctx.send(`Пользователь ${ctx.genMention(ctx.from)}\n${type === "plus" ? `Оплатил мероприятие ${ctx.session.type}` : `Не оплатил мероприятие ${ctx.session.type}`}`, {
        //         chat_id: element.id
        //     })
        // })
    })

    bot
    .action("Привилегия", async ctx => {
        ctx.deleteMessage()
        ctx.session.type = "Привилегия"
        if (ctx.user.registration) {
            await ctx.send(`Вы уже проходили регистрацию, теперь Вы можете оплатить мероприятие ${ctx.session.type}`, Markup
                .inlineKeyboard([
                    [Markup.button.url("Оплатить!", "https://yoomoney.ru/bill/pay/aSot8AJl2cw.230220")]
                ])
            )
            return setTimeout(() => {
                ctx.send("Вы оплатили участие в мероприятии?", Markup
                .inlineKeyboard([
                    [Markup.button.callback("Я оплатил!", "payment-plus")],
                    [Markup.button.callback("Я не оплатил", "payment-minus")]
                ])
            )
                }, 100000);
        }
        return ctx.scene.enter("payment")
    })
    .action("Стандарт", async ctx => {
        ctx.deleteMessage()
        ctx.session.type = "Стандарт"
        if (ctx.user.registration) {
            await ctx.send(`Вы уже проходили регистрацию, теперь Вы можете оплатить мероприятие ${ctx.session.type}`, Markup
                .inlineKeyboard([
                    [Markup.button.url("Оплатить!", "https://yoomoney.ru/bill/pay/BkAZHwJkskE.230220")]
                ])
            )
            return setTimeout(() => {
                ctx.send("Вы оплатили участие в мероприятии?", Markup
                .inlineKeyboard([
                    [Markup.button.callback("Я оплатил!", "payment-plus")],
                    [Markup.button.callback("Я не оплатил", "payment-minus")]
                ])
            )
                }, 100000);
        }
        return ctx.scene.enter("payment")
    })
    .action("go", async ctx => {
        ctx.deleteMessage()
        if (!ctx.user.registration) {
            try {
                await ctx.telegram.getChatMember(ctx.settings.body.chat.chat_id, ctx.from.id).then(x => {
                    if (x.status === "left") {
                        ctx.send("Для начала зайдите в чат и затем попробуйте заново!", Markup
                            .inlineKeyboard([
                                [Markup.button.url("Перейти в чат", ctx.settings.body.chat.invite_link)]
                            ])
                        )
                    } else ctx.scene.enter("registration")
                })
            } catch (error) {
                ctx.send("Для начала зайдите в чат и затем попробуйте заново!", Markup
                    .inlineKeyboard([
                        [Markup.button.url("Перейти в чат", ctx.settings.body.chat.invite_link)]
                    ])
                )
            }
        }
        else return ctx.send("Вы уже прошли регистрацию!")
    })

}