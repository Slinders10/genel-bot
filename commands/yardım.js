const { EmbedBuilder } = require("discord.js")
const diskord = require("discord.js")
const debe = require("croxydb")
const config = require("../config.js")
exports.run = async (client, message, args) => {
    const topgg = config.topgg
    const davet = config.botdavet
    const destek = config.desteksunucusu
    const value = args[0]

  const embed = new diskord.EmbedBuilder()
  .setTitle("Kategoriler")
  .setDescription(`**!a |** Abone sistemi.\n**!abone-rol |** Abone rol sistemini gösterir.\n**!abone-yetkilisi |** abone yetkilisini ayarlarsınız.\n**!afk |** Afk durumunuzu ayarlarsınız.\n**!alkış |** yazman yeterlidir ne oldugunu anlarsın\n**aşk-ölçer | **birine karşı aşkınızı ölçersiniz\n**!atatürk |** rastgele bir atatürk gif koyar\n**!avatar |** birinin avatarına bakarsınız\n**!ban-list |** banlanan kişileri görürsünüz\n**!ban |** birini banlarsınız\n**!başvur |** başvuru açarsınız\n**!başvuru-kanal |** başvuru kanalını ayarlarsınız\n**!başvuru-log |** başvuru loğlarını ayarlarsınız\n**!başvuru-rol |** başvuru rolünü ayarlarsınız\n**!buton-rol |** emoji rolünü ayarlarsınız emojiye basar ve rol alır her neyse anladın\n**!çekiliş-başlat |** çekiliş başlatırsınız\n**!çekiliş-bitir |** çekilişi aniden bitirirsiniz\n**!çekiliş-reroll |** çekiliş reroll ayarlarsınız\n**!emoji-yazı |** chat e emojiden yazı koyar botunuz\n**!emojiler |** sunucudaki emoji sayısını gösterir\n**!forceban |** forceban atarsınız kullanıcıya\n**!hackle |** birini hacklersiniz\n**!herkesetagver |** belirlediginiz tagı herkese verir\n**!hesapla |** matematik işlemini hesaplarsınız\n**!hg-bb |** giriş çıkış mesajını ayarlarsınız\n**!istatistik |** botun bilgilerini döker\n**!kaçcm |** malafatın kaç cm olduguna bakarsınız\n**!kanal-açıklama |** kanalınıza açıklama koyarsınız\n**!kick |** kullanıcıyı sunucudan atar\n**!kullanıcı-bilgi |** bir kullanıcı hakkında bilgi sahibi olursunuz\n**!kurucu-kim |** bir sunucuya girdin ve salaklar kurucularını belli etmiyorlarmı bu komut ile onları ifşa et\n**!küfürengel |**küfür engel sistemini açarsınız kapatmak için birdaha girmeniz yeterli\n**!leaderboard |** lider tablosunu ayarlarsınız\n**!menü-rol |** menülü rol sistemini ayarlarsınız\n**!not-al |** not alırsınız\n**!notum |** motunuza bakarsınız\n**!oto-cevap |** oto cevap ayarlarsınız\n**!oto-rol |** oto rol kurarsınız sunucunuza\n**!öneri-log |** öneriler için bir log sistemi açarsınız\n**!öneri |** öneri yaparsınız\n**!ping |** botun pingini görürsünüz\n**!reklamengel |** reklam korumasını açarsınız\n**!rol-al |** bir kişiden rol çıkartırsınız\n**!rol-oluştur |** sunucunuza rol oluşturur\n**!rol-ver |** bir kişiye rol verirsiniz\n**!sa-as |** sa as sistemini açıp kapatır\n**!sarıl |** bir kişiye sarılırsınız\n**!sayaç |** sunucunuzda sayaç sistemini yaparsınız\n**!sesli-çek |** bir kullanıcıyı sese çekersiniz\n**!temizle |** maksimum 100 mesaja kadar sohbeti temizlersiniz\n**!slot |** slot oyununu oynarsınız\n**!yavaş-mod |** yavaş modu açarsınız\n**!snake |** muhteşem yılan oyununu oynarsınız\n**!sunucu-bilgi |** sunucunuz hakkında bilgi edinirsiniz\n**!unban |** bir kişinin banını kaldırırsınız`)
  if(!args[0]) return message.channel.send({embeds: [embed]})
}


exports.conf = {
  aliases: []
}

exports.help = {
  name: "yardım"
}
