let handler = async m => m.reply(`
            .✵.GRUP PRATAMABOT.✵.

            https://chat.whatsapp.com/C6ahuoDnxXh9zbDnw9wYrb
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
