const a0_0x220b86=a0_0x24f1;function a0_0x337a(){const _0x4469bb=['jpg','join','get','url','end','message','❌\x20An\x20error\x20occurred:\x20','-pix_fmt\x20yuv420p','output','arraybuffer','kord','fluent-ffmpeg','171606dozOgp','https://api.waifu.pics/sfw/cringe','443288MSByRV','reply','temp.mp4','react','run','1797152gdgfxm','5szThUx','readFileSync','171069OBZjUx','libx264','cringe','animecringe','-t\x205','unlinkSync','writeFileSync','temp.gif','>\x20©\x20ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ\x20ʙʏ\x20ᴋᴏʀᴅ\x20ɪɴᴄ³²¹™','680524gYXnZm','error','586050wIhvwq','JPG','key','path','1238874MnKlUa','data','split','sendImage','remoteJid','Anime','sendMessage'];a0_0x337a=function(){return _0x4469bb;};return a0_0x337a();}(function(_0x5ec024,_0x2dbc1e){const _0xabe19f=a0_0x24f1,_0x360467=_0x5ec024();while(!![]){try{const _0x471424=parseInt(_0xabe19f(0x19c))/0x1+parseInt(_0xabe19f(0x194))/0x2+parseInt(_0xabe19f(0x192))/0x3+parseInt(_0xabe19f(0x1a5))/0x4+parseInt(_0xabe19f(0x19a))/0x5*(-parseInt(_0xabe19f(0x1a7))/0x6)+-parseInt(_0xabe19f(0x1ab))/0x7+-parseInt(_0xabe19f(0x199))/0x8;if(_0x471424===_0x2dbc1e)break;else _0x360467['push'](_0x360467['shift']());}catch(_0x1f3802){_0x360467['push'](_0x360467['shift']());}}}(a0_0x337a,0x1d7a9));function a0_0x24f1(_0x198551,_0x3d0fa7){const _0x337a19=a0_0x337a();return a0_0x24f1=function(_0x24f1e2,_0x5931fe){_0x24f1e2=_0x24f1e2-0x18d;let _0x206f67=_0x337a19[_0x24f1e2];return _0x206f67;},a0_0x24f1(_0x198551,_0x3d0fa7);}const axios=require('axios'),fs=require('fs'),path=require(a0_0x220b86(0x1aa)),ffmpeg=require(a0_0x220b86(0x191));module['exports']={'usage':[a0_0x220b86(0x19f),a0_0x220b86(0x19e)],'desc':'Fetch\x20and\x20send\x20a\x20random\x20anime\x20wallpaper.','commandType':a0_0x220b86(0x1b0),'isGroupOnly':![],'isAdminOnly':![],'isPrivateOnly':![],'emoji':'🍁',async 'execute'(_0x5dd713,_0x55eb01,_0x503d43){const _0x2ffee7=a0_0x220b86,_0x3d4273=_0x55eb01[_0x2ffee7(0x1a9)][_0x2ffee7(0x1af)],_0x16782b=path[_0x2ffee7(0x1b3)](__dirname,_0x2ffee7(0x1a3)),_0x346fcd=path[_0x2ffee7(0x1b3)](__dirname,_0x2ffee7(0x196));try{kord[_0x2ffee7(0x197)](_0x55eb01,'🍁');const _0x1c5267=await axios[_0x2ffee7(0x1b4)](_0x2ffee7(0x193));if(!_0x1c5267['data']['url'])return await global['kord'][_0x2ffee7(0x195)](_0x55eb01,'❌\x20Failed\x20to\x20fetch\x20the\x20wallpaper.');const _0x494853=_0x1c5267[_0x2ffee7(0x1ac)][_0x2ffee7(0x1b5)],_0x268915=_0x494853[_0x2ffee7(0x1ad)]('.')['pop']();if(_0x268915==='gif'||_0x268915==='GIF'){const {data:_0x4931ac}=await axios[_0x2ffee7(0x1b4)](_0x494853,{'responseType':_0x2ffee7(0x18f)});fs[_0x2ffee7(0x1a2)](_0x16782b,Buffer['from'](_0x4931ac)),await new Promise((_0x2bb71d,_0x12c877)=>{const _0x12ead1=_0x2ffee7;ffmpeg(_0x16782b)[_0x12ead1(0x18e)](_0x346fcd)['noAudio']()['videoCodec'](_0x12ead1(0x19d))['size']('320x240')['outputOptions'](_0x12ead1(0x18d))['outputOptions'](_0x12ead1(0x1a0))['on'](_0x12ead1(0x1b6),_0x2bb71d)['on'](_0x12ead1(0x1a6),_0x12c877)[_0x12ead1(0x198)]();});const _0x4ad55c=fs[_0x2ffee7(0x19b)](_0x346fcd);await _0x5dd713[_0x2ffee7(0x1b1)](_0x3d4273,{'video':_0x4ad55c,'mimetype':'video/mp4','caption':_0x2ffee7(0x1a4),'gifPlayback':!![]}),fs['unlinkSync'](_0x16782b),fs[_0x2ffee7(0x1a1)](_0x346fcd);}else _0x268915===_0x2ffee7(0x1b2)||_0x268915==='jpeg'||_0x268915===_0x2ffee7(0x1a8)||_0x268915==='JPEG'?await global[_0x2ffee7(0x190)][_0x2ffee7(0x1ae)](_0x55eb01,_0x494853,_0x2ffee7(0x1a4)):await global['kord'][_0x2ffee7(0x195)](_0x55eb01,'❌\x20Unsupported\x20file\x20type.');}catch(_0xd705bc){console[_0x2ffee7(0x1a6)]('Error\x20fetching\x20or\x20sending\x20media:',_0xd705bc[_0x2ffee7(0x1b7)]),await global[_0x2ffee7(0x190)][_0x2ffee7(0x195)](_0x55eb01,_0x2ffee7(0x1b8)+_0xd705bc[_0x2ffee7(0x1b7)]);}}};