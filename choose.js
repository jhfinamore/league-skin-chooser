module.exports = {
    name : "choose",
    description: "This command accepts a champ name and returns a skin!",
    aliases: ['pick, choice, champ'],
    execute(message, args) {
        var returnMessage = "";
        if(!args.length) {
            return message.channel.send(`You didn't provide a champ name, ${message.author}!`);
        }
        else if (args[0]==="aatrox") 
        {
            var skinlist = ['Base','Justicar','Mecha','Sea Hunter','Blood Moon Aatrox','Prestige', 'Mecha'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ahri") 
        {
            var skinlist = ['K/DA Prestige', 'K/DA', 'Star Guardian', 'Pop Star', 'Arcade', 'Academy', 'Firefox', 'Challenger', 'Midnight', 'Base', 'Dynasty'];
            /*returnMessage += "This is the message to return!";
            returnMessage += " ";
            for (var i = 0; i < skinlist.length; i++) {
                returnMessage += i + " " + skinlist[i];
            }
            returnMessage += " " + skinlist.length + "\n";*/
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="akali") 
        {
            var skinlist = ['K/DA Prestige','K/DA','Sashimi','Headhunter','Silverfang','Blood Moon','Nurse','All-Star','Stinger','Infernal','Base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="alistar") 
        {
            var skinlist = ['base','golden','infernal','marauder','moo cow','matador','longhorn','sweeper','skt t1','conqueror','black','unchained','hextech'];
            var randomInt = Math.floor(Math.random() * 14);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="amumu") 
        {
            var skinlist = ['infernal','surprise party','base','sad robot','little knight','almost prom king','re-gifted','emumu','vancouver','pharoah'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="anivia") 
        {
            var skinlist = ['festival queen','prehistoric','blackfrost','hextech','noxus hunter','bird of prey','team spirit','papercraft','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="annie") 
        {
            var skinlist = ['super galaxy','hextech','sweetheart','panda','frankentibbers','reverse','frostfire','prom queen','annie in wonderland','red riding','goth','base'];
            var randomInt = Math.floor(Math.random() * 13);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ashe") 
        {
            var skinlist = ['cosmic queen','championship','project','marauder','heartseeker','amethyst','queen','sherwood','woad','freljord','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="aurelion sol" || args[0]==="asol") 
        {
            var skinlist = ['mecha','ashen lord','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="azir") 
        {
            var skinlist = ['skt t1','warring kingdoms','gravelord','galatic','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="bard") 
        {
            var skinlist = ['bard bard','snow day','elderwood','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="blitzcrank") 
        {
            var skinlist = ['lancer roque','lancer paragon','battle boss','riot','iblitzcrank','definitely not','piltover','boom boom','goalkeeper','rusty','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="brand") 
        {
            var skinlist = ['arclight','battle boss','spirit fire','zombie','cryocore','vandal','apocalyptic','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="braum") 
        {
            var skinlist = ['mafia','santa','lionheart','el tigre','dragonslayer','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="caitlyn") 
        {
            var skinlist = ['pool party','pulsefire','lunar wraith','headhunter','artic warfare','officer','safari','sheriff','resistance','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="camille") 
        {
            var skinlist = ['IG','coven','program','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="cassiopeia" || args[0]==="cassio") 
        {
            var skinlist = ['eternum','jade fang','mythic','siren','desperada','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="cho'gath" || args[0==="cho"]) 
        {
            var skinlist = ['dark star','prehistoric','battlecast prime','jurassic','loch ness','gentleman','nightmare','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="corki") 
        {
            var skinlist = ['corgi','arcade','fnatic','dragonwing','urfrider','hot rod','red baron','ice toboggan','UFO','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="darius") 
        {
            var skinlist = ['god-king','dreanova','academy','dunkmaster','woad king','bioforge','lord','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="diana") 
        {
            var skinlist = ['dark waters','blood moon','infernal','lunar goddess','dark valkyrie','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="dr mundo" || args[0]==="mundo") 
        {
            var skinlist = ['frozen prince','el macho','pool party','TPA','rageborn','executioner','mundo mundo','corporate','mr. mundoverse','toxic','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="draven") 
        {
            var skinlist = ['santa','draven draven','beast hunter','pool party','primetime','gladiator','soul reaber','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ekko") 
        {
            var skinlist = ['trick or treat','skt t1','project','academy','sandstorm','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="elise") 
        {
            var skinlist = ['super galaxy','skt','blood moon','victorious','death blossom','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="evelynn") 
        {
            var skinlist = ['K/DA','blood moon','safecracker','tango','masguerade','shadow','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ezreal" || args[0]==="ez") 
        {
            var skinlist = ['pajama guardian','SSG','star guardian','arcade','ace of spades','debonair','TPA','pulsefire','explorer','frosted','striker','nottingham','base'];
            var randomInt = Math.floor(Math.random() * 13);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="fiddlesticks" || args[0]==="fiddle") 
        {
            var skinlist = ['praetorian','risen','dark candy','suprise party','fiddle me timbers','pumpkinhead','bandito','spectral','union jack','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="fiora" || args[0]==="fio") 
        {
            var skinlist = ['IG','heartpiercer','soaring sword','pool party','project','headmistress','royal guard','nightraven','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="fizz") 
        {
            var skinlist = ['fuzz prestige','fuzz','omega squad','super galaxy','cottontail','void','fisherman','tundra','atlantean','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="galio") 
        {
            var skinlist = ['birdio','debonair','gatekeeper','commando','hextech','enchanted','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="gangplank" || args[0]==="gp") 
        {
            var skinlist = ['pool party','dreadnova','captain','sultan','special forces','toy soldier','sailor','minutemen','spooky','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="garen") 
        {
            var skinlist = ['god-king','warring kingdoms','roque admiral','steel legion','rugged','dreadknight','commando','sanquine','desert trooper','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="gnar") 
        {
            var skinlist = ['SSG','super galaxy','el leon','snow day','gentleman','dino','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="gragas") 
        {
            var skinlist = ['artic ops','caskbreaker','fnatic','superfan','oktoberfest','vandal','gragas, esq.','santa','hillbilly','scuba','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="graves") 
        {
            var skinlist = ['praetorian','victorious','snow day','cutthroat','pool party','riot','mafia','jailbreak','hired gun','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="hecarim") 
        {
            var skinlist = ['lancer zero','worldbreaker','elderwood','arcade','headless','reaper','blood knight','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="heimerdinger") 
        {
            var skinlist = ['dragon trainer','hazmat','blast zone','snowmerdinger','piltover customs','alien invader','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="illaoi") 
        {
            var skinlist = ['resistance','void bringer','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="irelia") 
        {
            var skinlist = ['divine sword','IG','order of the lotus','frostbalde','infiltrator','nightblade','aviator','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ivern") 
        {
            var skinlist = ['candy king','dunkmaster','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="janna") 
        {
            var skinlist = ['bewitching','sacred sword','star guardian','fnatic','forecast','victorious','frost queen','hextech','tempest','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="jarvan4" || args[0]==="j4" || args[0]==="jarvaniv" || args[0]==="jarvan") 
        {
            var skinlist = ['SSG','dark star','fnatic','warring kingdoms','victorious','darkforge','dragonslayer','commando','hextech','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="jax") 
        {
            var skinlist = ['god staff','warden','SKT','nemesis','temple','jaximus','pax','angular','vandal','the might','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="jayce") 
        {
            var skinlist = ['brighthammer','forsaken','debonair','full metal','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="jhin") 
        {
            var skinlist = ['project','skt t1','blood moon','high noon','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="jinx") 
        {
            var skinlist = ['odyssey','ambitious elf','star guardian','slayer','firecracker','mafia','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kai'sa" || args[0]==="kaisa") 
        {
            var skinlist = ['IG','K/DA Prestige','K/DA','bullet angel','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kalista" || args[0]==="kali") 
        {
            var skinlist = ['skt','championship','blood moon','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="karma") 
        {
            var skinlist = ['conqueror','winter wonder','warden','order of the lotus','traditional','sun goddess','sakura','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="karthus") 
        {
            var skinlist = ['lightsbane','fnatic','pentakill','grim reaper','statue of karthus','phantom','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kassadin" || args[0]==="kassawin" || args[0]==="kass") 
        {
            var skinlist = ['cosmic reaver','harbinger','pre-void','deep one','festival','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="katarina" || args[0]==="kat") 
        {
            var skinlist = ['death sworn','project','warring kingdoms','slay belle','sandstorm','high command','kitty kat','bilgewater','red card','mercenary','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kayle") 
        {
            var skinlist = ['iron inquisitor','riot','aether wing','judgement','battleborn','transcended','viridian','silver','pentakill','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kayn" || args[0]==="kayne") 
        {
            var skinlist = ['odyssey','soulhunter','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kennen" || args[0]==="kennan") 
        {
            var skinlist = ['super','blood moon','artic ops','kennen M.D.','karate','swamp master','deadly','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kha'zix" || args[0]==="kha") 
        {
            var skinlist = ['championship','dark star','death blossom','guardian of the sands','mecha','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kindred" || args[0]==="lamb" || args[0]==="wolf") 
        {
            var skinlist = ['super galaxy','shadowfire','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kled" || args[0]==="skaarl") 
        {
            var skinlist = ['count kledula','sir kled','base'];
            var randomInt = Math.floor(Math.random() *4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="kog'maw" || args[0]==="kog") 
        {
            var skinlist = ['hextech','pug','battlecast','jurassic','deep sea','lion dance','reindeer','monarch','sonoran','caterpillar','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="leblanc" || args[0]==="lb") 
        {
            var skinlist = ['IG','program','elderwood','ravenborn','mistletoe','wicked','prestigious','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="lee" || args[0]==="lee sin") 
        {
            var skinlist = ['playmaker','god fist','knockout','SKT','pool party','muay thai','dragon fist','traditional','acolyte','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="leona") 
        {
            var skinlist = ['solar eclipse','lunar eclipse','barbecue','project','pool party','iron solari','valkyrie','defender','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="liss" || args[0]==="lissandra") 
        {
            var skinlist = ['coven','program','blade queen','bloodstone','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="lucian") 
        {
            var skinlist = ['high noon','heartseeker','project','striker','hired gun','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="lulu") 
        {
            var skinlist = ['pajama guardian','cosmic enchantress','star guardian','pool party','winter wonder','dragon trainer','wicked','bittersweet','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="lux") 
        {
            var skinlist = ['pajama guardian','lunar empress','elementalist','star guardian','steel legion','imperial','commando','spellthief','sorceress','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="malphite" || args[0]==="malph") 
        {
            var skinlist = ['odyssey','ironside','mecha','glacial','obsidian','marble','coral reef','shamrock','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="malzahar" || args[0]==="malz") 
        {
            var skinlist = ['hextech','battle boss','snow day','overlord','dijinn','vizier','shadow prince','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="maokai") 
        {
            var skinlist = ['victorious','meowkai','goalkeeper','haunted','festive','totemic','charred','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="masteryi" || args[0]==="yi" || args[0]==="master yi") 
        {
            var skinlist = ['snow man','eternal sword','cosmic blade','project','headhunter','samurai','ionia','chosen','assassin','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="miss fortune" || args[0]==="mf" || args[0]==="miss") 
        {
            var skinlist = ['pajama guardian','star guardian','gun goddess','pool party','captain','arcade','mafia','road warrior','candy cane','secret agent','waterloo','cowgirl','base'];
            var randomInt = Math.floor(Math.random() * 14);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="mordekaiser" || args[0]==="morde") 
        {
            var skinlist = ['king of clubs','lord','pentakill','infernal','dragon knight','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="morgana" || args[0]==="morg") 
        {
            var skinlist = ['bewitching','lunar wraith','victorious','ghost bride','blackthorn','blade mistress','sinful succulence','exiled','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="nami") 
        {
            var skinlist = ['program','skt t1','deep sea','urf the nami-tee','river spirit','koi','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="nasus" || args[0]==="susan" || args[0]==="dog") 
        {
            var skinlist = ['lunar guardian','worldbreaker','archduke','infernal','riot k-9','dreadknight','pharoah','galatic','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="nautilus" || args[0]==="naut") 
        {
            var skinlist = ['warden','worldbreaker','astronautilus','subterranean','abyssal','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="neeko") 
        {
            var skinlist = ['winter wonder','base'];
            var randomInt = Math.floor(Math.random() * 3);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="nidalee" || args[0]==="nid") 
        {
            var skinlist = ['super galaxy','challenger','warring kingdoms','headhunter','bewitching','pharoah','french maid','leopard','snow bunny','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="nocturne" || args[0]==="noc") 
        {
            var skinlist = ['cursed revenant','eternum','haunting','ravager','void','frozen terror','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="nunu" || args[0]==="nunu & willump" || args[0]==="willump" || args[0]==="yeti") 
        {
            var skinlist = ['zombie','tpa','demolisher','bot','grungy','workshop','papercraft','sasquatch','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="olaf") 
        {
            var skinlist = ['skt t1','butcher','marauder','pentakill','brolaf','glacial','forsaken','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="orianna") 
        {
            var skinlist = ['dark star','heartseeker','winder wonder','TPA','bladecraft','sewn chaos','gothic','victorious','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ornn") 
        {
            var skinlist = ["thunder lord",'base'];
            var randomInt = Math.floor(Math.random() * 3);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="pantheon") 
        {
            var skinlist = ['baker','slayer','dragonslayer','glaive warrior','full metal','perseus','ruthless','myrmidon','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="poppy") 
        {
            var skinlist = ['hextech','snow fawn','star guardian','scarlet hammer','battle regalia','ragdoll','lollipoppy','blacksmith','noxus','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="pyke") 
        {
            var skinlist = ['blood moon','sand wraith','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="quinn") 
        {
            var skinlist = ['heartseeker','corsair','woad scout','phoenix','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="rakan") 
        {
            var skinlist = ['IG','SSG','sweetheart','cosmic dawn','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="rammus") 
        {
            var skinlist = ['sweeper','guardian of the sands','full metal','ninja','freljord','molten','chrome','king','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="reksai" || args[0]==="rek'sai" || args[0]==="rek" || args[0]==="sai") 
        {
            var skinlist = ['pool party','eternum','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="renekton" || args[0]==="renek") 
        {
            var skinlist = ['hextech','renektoy','SKT','prehistoric','scorched earth','pool party','rune wars','bloodfury','outback','galatic','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="rengar") 
        {
            var skinlist = ['pretty kitty','mecha','SSW','night hunter','headhunter','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="riven" || args[0]==="riv") 
        {
            var skinlist = ['pulsefire','dawnbringer','championship 2016','arcade','dragonblade','championship','battle bunny','redeemed','crimson elite','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="rumble") 
        {
            var skinlist = ['badlands baron','super galaxy','rumble in the jungle','bilgerat','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ryze") 
        {
            var skinlist = ['SKT','whitebeard','pirate','dark crystal','tribal','zombie','professor','triumphant','uncle','human','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="sejuani" || args[0]==="sej") 
        {
            var skinlist = ['firecracker','dawnchaser','beast hunter','poro rider','bear cavalry','traditional','sabretusk','darkrider','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="shaco" || args[0]==="clown") 
        {
            var skinlist = ['wild card','masked','asylum','workshop','nutcracko','royal','mad hatter','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="shen") 
        {
            var skinlist = ['pulsefire','TPA','warlord','blood moon','surgeon','yellow jacket','frozen','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="shyvana" || args[0]==="shy") 
        {
            var skinlist = ['super galaxy','championship','ice drake','dark flame','ironscale','boneclaw','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="singed") 
        {
            var skinlist = ['beekeeper','black scourge','SSW','snow day','augmented','mad scientist','surfer','riot squad','hextech','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="sion") 
        {
            var skinlist = ['mecha zero','warmonger','lumberjack','barbarian','hextech','base'];
            var randomInt = Math.floor(Math.random() * 3);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="sivir" || args[0]==="siv") 
        {
            var skinlist = ['blood moon','pizza delivery','neo pax','victorious','warden','snowstorm','pax','bandit','huntress','spectacular','warrior princess','base'];
            var randomInt = Math.floor(Math.random() * 13);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="skarner") 
        {
            var skinlist = ['guardian of the sands','battlecast alpha','sandscourge','earthrune','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="sona") 
        {
            var skinlist = ['odyssey','sweetheart','DJ','arcade','guqin','silent night','pentakill','muse','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="soraka" || args[0]==="raka") 
        {
            var skinlist = ['pajama guardian','winter wonder','star guardian','program','order of the banana','reaper','celestine','divine','dryad','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="swain") 
        {
            var skinlist = ['dragon master','tyrant','northern front','bilgewater','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="sylas") 
        {
            var skinlist = ['lunar wraith','base'];
            var randomInt = Math.floor(Math.random() * 3);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="syndra") 
        {
            var skinlist = ['star guardian','skt t1','snow day','queen of diamonds','atlantean','justicar','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="tahm kench" || args[0]==="tahm") 
        {
            var skinlist = ['coin emperor','urf','masterchef','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="taliyah") 
        {
            var skinlist = ['SSG','freljord','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="talon") 
        {
            var skinlist = ['enduring sword','blood moon','SSW','dragonblade','renegade','crimson elite','base'];
            var randomInt = Math.floor(Math.random() * 3);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="taric") 
        {
            var skinlist = ['pool party','bloodstone','armor of the fifth age','emerald','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="teemo") 
        {
            var skinlist = ['beemo','little devil','omega squad','panda','super','cottontail','astronaut','badger','recon','happy elf','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="thresh") 
        {
            var skinlist = ['high noon','dark star','championship','SSW','blood moon','deep terror','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="tristana" || args[0]==="trist") 
        {
            var skinlist = ['omega squad','bewitching','dragon trainer','rocket girl','buccaneer','guerilla','firefighter','earnest elf','riot girl','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="trundle") 
        {
            var skinlist = ['worldbreaker','constable','traditional','lil slugger','junkyard','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="tryndamere" || args[0]==="tryn") 
        {
            var skinlist = ['chemtech','beast hunter','nightmare','warring kingdoms','sultan','demonblade','viking','king','highland','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="twisted fate") 
        {
            var skinlist = ['pulsefire','blood moon','cutpurse','red card','underworld','musketeer','high noon','tango','the magnificent','jack of hearts','PAX','base'];
            var randomInt = Math.floor(Math.random() * 13);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="twitch") 
        {
            var skinlist = ['ice king','omega squad','SSW','pickpocket','vandal','gangster','medieval','whistler village','kingpin','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="udyr") 
        {
            var skinlist = ['definitely not','spirit guard','primal','black belt','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="urgot") 
        {
            var skinlist = ['high noon','battlecast','giant enemy crabgot','butcher','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="varus") 
        {
            var skinlist = ['dark star','swiftbolt','heartseeker','artic ops','arclight','blight crystal','conqueror','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="vayne") 
        {
            var skinlist = ['firecracker prestige','firecracker','project','soulstealer','arclight','SKT','heartseeker','dragonslayer','vindicator','aristocat','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="veigar" || args[0]==="veig") 
        {
            var skinlist = ['omega squad','final boss','bad santa','superb villain','baron von','leprechaun','greybeard','curling','white mage','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="vel'koz" || args[0]==="velkoz" || args[0]==="vel") 
        {
            var skinlist = ['arclight','definitely not','battlecast','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="vi") 
        {
            var skinlist = ['heartbreaker','project','warring kingdoms','demon','debonair','officer','neon strike','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="viktor" || args[0]==="vik") 
        {
            var skinlist = ['death sworn','creator','prototype','full machine','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="vladimir" || args[0]==="vlad") 
        {
            var skinlist = ['dark waters','academy','soulsteeler','blood lord','vandal','nosferatu','marquis','count','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="volibear" || args[0]==="voli") 
        {
            var skinlist = ['el rayo','captain','thunder lord','runeguard','northern storm','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="warwick" || args[0]==="ww") 
        {
            var skinlist = ['lunar guardian','marauder','hyena','firefang','feral','tundra hunter','big bad','urf the manatee','grey','base'];
            var randomInt = Math.floor(Math.random() * 11);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="wukong" || args[0]==="wu") 
        {
            var skinlist = ['lancer strong','radiant','underworld','jade dragon','volcanic','general','base'];
            var randomInt = Math.floor(Math.random() * 8);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="xayah") 
        {
            var skinlist = ['SSG','sweetheart','cosmic dusk','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="xerath") 
        {
            var skinlist = ['guardian of the sands','scorched earth','runeborn','battlecast','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="xin zhao" || args[0]==="xin") 
        {
            var skinlist = ['cosmic defender','dragonslayer','secret agent','warring kingdoms','winged hussar','viscero','imperial','commando','base'];
            var randomInt = Math.floor(Math.random() * 10);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="yasuo" || args[0]==="yas" || args[0]==="yassuo") 
        {
            var skinlist = ['odyssey','nightbringer','blood moon','project','high noon','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="yorick") 
        {
            var skinlist = ['meowrick','arclight','undertaker','pentakill','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="zac") 
        {
            var skinlist = ['skt t1','pool party','special weapon','base'];
            var randomInt = Math.floor(Math.random() * 5);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="zed") 
        {
            var skinlist = ['death sworn','championship','project','skt','shockblade','base'];
            var randomInt = Math.floor(Math.random() * 7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="ziggs") 
        {
            var skinlist = ['odyssey','battle boss','marster arcanist','snow day','pool party','major','mad scientist','base'];
            var randomInt = Math.floor(Math.random() * 9);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="zilean" || args[0]==="zil") 
        {
            var skinlist = ['blood moon','time machine','shurima desert','groovy','old saint','base'];
            var randomInt = Math.floor(Math.random() *7);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="zoe") 
        {
            var skinlist = ['pool party','cyber pop','base'];
            var randomInt = Math.floor(Math.random() * 4);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="zyra") 
        {
            var skinlist = ['dragon sorceress','SKT','haunted','wildfire','base'];
            var randomInt = Math.floor(Math.random() * 6);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
        else if (args[0]==="") 
        {
            var skinlist = ['','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }else if (args[0]==="") 
        {
            var skinlist = ['','base'];
            var randomInt = Math.floor(Math.random() * 12);
            returnMessage += " The skin that was chosen for you is: " + skinlist[randomInt];
            return message.channel.send(returnMessage);
        }
    }
}