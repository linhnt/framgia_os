$(window).ready(function(){
	CW.prepareRegExp();
	CW.reg_cmp.push({key:/\(facepalm\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/facepalm.gif' alt='(facepalm)' title='(facepalm)' class='ui_emoticon'/>", reptxt:'(facepalm)'});
	CW.reg_cmp.push({key:/\(facepalm2\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/facepalm2.gif' alt='(facepalm2)' title='(facepalm2)' class='ui_emoticon'/>", reptxt:'(facepalm2)'});
	CW.reg_cmp.push({key:/\(dull\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/dull.gif' alt='(dull)' title='(dull)' class='ui_emoticon'/>", reptxt:'(dull)'});
	CW.reg_cmp.push({key:/\(mooning\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/mooning.gif' alt='(mooning)' title='(mooning)' class='ui_emoticon'/>", reptxt:'(mooning)'});
	CW.reg_cmp.push({key:/\(finger\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/finger.gif' alt='(finger)' title='(finger)' class='ui_emoticon'/>", reptxt:'(finger)'});
	CW.reg_cmp.push({key:/\(airblade\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/airblade.gif' alt='(airblade)' title='(airblade)' class='ui_emoticon'/>", reptxt:'(airblade)'});
	CW.reg_cmp.push({key:/\(hehehe\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/hehehe.gif' alt='(hehehe)' title='(hehehe)' class='ui_emoticon'/>", reptxt:'(hehehe)'});
	CW.reg_cmp.push({key:/\(honho\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/honho.gif' alt='(honho)' title='(honho)' class='ui_emoticon'/>", reptxt:'(honho)'});
	CW.reg_cmp.push({key:/\(silly\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/silly.gif' alt='(silly)' title='(silly)' class='ui_emoticon'/>", reptxt:'(silly)'});
	CW.reg_cmp.push({key:/\(noinham\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/noinham.png' alt='(noinham)' title='(noinham)' class='ui_emoticon'/>", reptxt:'(noinham)'});
	CW.reg_cmp.push({key:/\(uongthuoc\)/g, rep: "<img src='http://cwep.thangtd.com/img/emoticons/uongthuoc.png' alt='(uongthuoc)' title='(uongthuoc)' class='ui_emoticon'/>", reptxt:'(uongthuoc)'});
	CW.reg_cmp.push({key:/\(liem\)/g, rep: "<img src='http://pik.vn/2014ebeaf3ca-78a9-488c-a5b2-fc31664e504d.jpeg' alt='(liem)' title='(liem)' class='ui_emoticon'/>", reptxt:'(liem)'});	
	CW.reg_cmp.push({key:/\(ban\)/g, rep: "<img src='http://pik.vn/2014e99e33b7-3b00-418c-b8bc-b700776634e2.png' alt='(ban)' title='(ban)' class='ui_emoticon'/>", reptxt:'(ban)'});
	CW.reg_cmp.push({key:/\(voteban\)/g, rep: "<img src='http://pik.vn/2014e99e33b7-3b00-418c-b8bc-b700776634e2.png' alt='(voteban)' title='(voteban)' class='ui_emoticon'/>", reptxt:'(voteban)'});	
	CW.reg_cmp.push({key:/\(\+1\)/g, rep: "<img src='http://pik.vn/2014c03f5a1e-1967-4481-8c63-02d9f37060f9.jpeg' alt='(+1)' title='(+1)' class='ui_emoticon'/>", reptxt:'(+1)'});
	CW.reg_cmp.push({key:/\(lol\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1518.gif' alt='(lol)' title='(lol)' class='ui_emoticon'/>", reptxt:'(lol)'});
	CW.reg_cmp.push({key:/\(veu\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1523.gif' alt='(veu)' title='(veu)' class='ui_emoticon'/>", reptxt:'(veu)'});
	CW.reg_cmp.push({key:/\(bim\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sex440.jpg' alt='(bim)' title='(bim)' class='ui_emoticon'/>", reptxt:'(bim)'});
	CW.reg_cmp.push({key:/\(bim2\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sexes048.gif' alt='(bim2)' title='(bim2)' class='ui_emoticon'/>", reptxt:'(bim2)'});
	
	
	CW.reg_cmp.push({key:/\(doggy\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1511.gif' alt='(doggy)' title='(doggy)' class='ui_emoticon'/>", reptxt:'(doggy)'});
	CW.reg_cmp.push({key:/\(rofl\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/24.gif' alt='(rofl)' title='(rofl)' class='ui_emoticon'/>", reptxt:'(rofl)'});
	CW.reg_cmp.push({key:/\(mooning2\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1543.gif' alt='(mooning2)' title='(mooning2)' class='ui_emoticon'/>", reptxt:'(mooning2)'});
	CW.reg_cmp.push({key:/\(xephinh\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t1594.gif' alt='(xephinh)' title='(xephinh)' class='ui_emoticon'/>", reptxt:'(xephinh)'});
	CW.reg_cmp.push({key:/\(bj\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15116.gif' alt='(bj)' title='(bj)' class='ui_emoticon'/>", reptxt:'(bj)'});
	CW.reg_cmp.push({key:/\(vetmang\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sex261.gif' alt='(vetmang)' title='(vetmang)' class='ui_emoticon'/>", reptxt:'(vetmang)'});
	CW.reg_cmp.push({key:/\(poundit\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sex367.gif' alt='(poundit)' title='(poundit)' class='ui_emoticon'/>", reptxt:'(poundit)'});
	CW.reg_cmp.push({key:/\(ilovesex\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sexes438.gif' alt='(ilovesex)' title='(ilovesex)' class='ui_emoticon'/>", reptxt:'(ilovesex)'});
	CW.reg_cmp.push({key:/\(moccua\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sexes009.gif' alt='(moccua)' title='(moccua)' class='ui_emoticon'/>", reptxt:'(moccua)'});
	CW.reg_cmp.push({key:/\(mong\)/g, rep: "<img src='http://www.bestemoticon.com/smiley/sexe/sexes186.png' alt='(mong)' title='(mong)' class='ui_emoticon'/>", reptxt:'(mong)'});
	
	
	
	CW.reg_cmp.push({key:/\(nude\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15109.gif' alt='(nude)' title='(nude)' class='ui_emoticon'/>", reptxt:'(nude)'});
	CW.reg_cmp.push({key:/\(69\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15126.gif' alt='(69)' title='(69)' class='ui_emoticon'/>", reptxt:'(69)'});
	CW.reg_cmp.push({key:/\(fuck\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15164.gif' alt='(fuck)' title='(fuck)' class='ui_emoticon'/>", reptxt:'(fuck)'});
	CW.reg_cmp.push({key:/\(dit\)/g, rep: "<img src='http://yoursmiles.org/tsmile/sex/t15164.gif' alt='(dit)' title='(dit)' class='ui_emoticon'/>", reptxt:'(dit)'});
	CW.reg_cmp.push({key:/\(cuoideu\)/g, rep: "<img src='http://aoevietnam.org/images/icon2009/cuoideu.gif' alt='(cuoideu)' title='(cuoideu)' class='ui_emoticon'/>", reptxt:'(cuoideu)'});
	CW.reg_cmp.push({key:/\(vinhnhon\)/g, rep: "<img src='http://hai4v.com/vn.png' alt='(vinhnhon)' title='(vinhnhon)' class='ui_emoticon'/>", reptxt:'(vinhnhon)'});
	CW.reg_cmp.push({key:/\(vinhnhonbe\)/g, rep: "<img src='http://pik.vn/201451010229-87a1-40c4-9a79-57d9927d6798.png' alt='(vinhnhonbe)' title='(vinhnhonbe)' class='ui_emoticon'/>", reptxt:'(vinhnhonbe)'});
	CW.reg_cmp.push({key:/\(vinhnhon2\)/g, rep: "<img src='http://pik.vn/20142180dd14-f7c7-4a7f-baa9-9eb112e3173b.png' alt='(vinhnhon2)' title='(vinhnhon2)' class='ui_emoticon'/>", reptxt:'(vinhnhon2)'});
	CW.reg_cmp.push({key:/\(vinhnhon2be\)/g, rep: "<img src='http://pik.vn/20148d6abb28-a45c-4713-8d65-cf01b3ec0eb2.png' alt='(vinhnhon2be)' title='(vinhnhon2be)' class='ui_emoticon'/>", reptxt:'(vinhnhon2be)'});
	CW.reg_cmp.push({key:/\(vinhnhon2bexiu\)/g, rep: "<img src='http://pik.vn/20148e3ec591-7887-403b-b0cc-51bc8e5eb380.png' alt='(vinhnhon2bexiu)' title='(vinhnhon2bexiu)' class='ui_emoticon'/>", reptxt:'(vinhnhon2bexiu)'});
	
	CW.reg_cmp.push({key:/\(adu\)/g, rep: "<img src='http://pik.vn/2014f2e704b5-bba0-4705-8973-140c41ff4857.jpeg' alt='(adu)' title='(adu)' class='ui_emoticon'/>", reptxt:'(adu)'});
	
	
	CW.reg_cmp.push({key:/\(quaytay\)/g, rep: "<img src='http://pik.vn/20147442d0ad-f1ba-4737-8fe5-47ac93a5d818.gif' alt='(quaytay)' title='(quaytay)' class='ui_emoticon'/>", reptxt:'(quaytay)'});
	CW.reg_cmp.push({key:/\(bopcoga\)/g, rep: "<img src='http://pik.vn/20147442d0ad-f1ba-4737-8fe5-47ac93a5d818.gif' alt='(bopcoga)' title='(bopcoga)' class='ui_emoticon'/>", reptxt:'(bopcoga)'});
	
	CW.reg_cmp.push({key:/\(yaoming\)/g, rep: "<img src='http://www.sickos-alliance.net/forum/images/smilies/yaoming.png' alt='(yaoming)' title='(yaoming)' class='ui_emoticon'/>", reptxt:'(yaoming)'});
	
	
	
	CW.reg_cmp.push({key:/\(kimjongnhon\)/g, rep: "<img src='http://pik.vn/201465050631-13a6-4d3b-a722-b4b9688ca449.jpeg' alt='(kimjongnhon)' title='(kimjongnhon)' class='ui_emoticon'/>", reptxt:'(kimjongnhon)'});
	CW.reg_cmp.push({key:/\(lanhtu\)/g, rep: "<img src='http://pik.vn/201465050631-13a6-4d3b-a722-b4b9688ca449.jpeg' alt='(lanhtu)' title='(lanhtu)' class='ui_emoticon'/>", reptxt:'(lanhtu)'});
	CW.reg_cmp.push({key:/\(lanhtu2\)/g, rep: "<img src='http://pik.vn/201408dfa940-4fcb-48ca-8f68-a35d41593a6a.jpeg' alt='(lanhtu2)' title='(lanhtu2)' class='ui_emoticon'/>", reptxt:'(lanhtu2)'});
	CW.reg_cmp.push({key:/\(lanhtu2to\)/g, rep: "<img src='http://pik.vn/2014b929e615-810f-41ef-949f-9cbf7d5618c8.jpeg' alt='(lanhtu2to)' title='(lanhtu2to)' class='ui_emoticon'/>", reptxt:'(lanhtu2to)'});
	
	
	CW.reg_cmp.push({key:/\(ngon\)/g, rep: "<img src='http://vozforums.com/images/smilies/Off/beauty.gif' alt='(ngon)' title='(ngon)' class='ui_emoticon'/>", reptxt:'(ngon)'});
	CW.reg_cmp.push({key:/\(dm\)/g, rep: "<img src='http://pik.vn/2014d629b490-8ef2-4cf6-8291-5b8716dd2845.gif' alt='(dm)' title='(dm)' class='ui_emoticon'/>", reptxt:'(dm)'});
	CW.reg_cmp.push({key:/\(shit\)/g, rep: "<img src='http://www.sherv.net/cm/emoticons/shit/steaming-turd-smiley-emoticon.gif' alt='(shit)' title='(shit)' class='ui_emoticon'/>", reptxt:'(shit)'});
	
	CW.reg_cmp.push({key:/\(wait\)/g, rep: "<img src='http://www.skype-emoticons.com/images/emoticon-00133-wait.gif' alt='(wait)' title='(wait)' class='ui_emoticon'/>", reptxt:'(wait)'});
	CW.reg_cmp.push({key:/\(wasntme\)/g, rep: "<img src='http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0122-itwasntme.gif' alt='(wasntme)' title='(wasntme)' class='ui_emoticon'/>", reptxt:'(wasntme)'});
	
	//Yahoo	
CW.reg_cmp.push({key:/:o3/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/108.gif' alt=':o3' title=':o3' class='ui_emoticon'/>", reptxt:':o3'});
CW.reg_cmp.push({key:/%\-\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/107.gif' class='ui_emoticon'/>", reptxt:'%-('});
CW.reg_cmp.push({key:/:\-h/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/103.gif' alt=':-h' title=':-h' class='ui_emoticon'/>", reptxt:':-h'});
CW.reg_cmp.push({key:/:o3/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/108.gif' alt=':o3' title=':o3' class='ui_emoticon'/>", reptxt:':o3'});
CW.reg_cmp.push({key:/:\-\?\?/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/106.gif' alt=':-??' title=':-??' class='ui_emoticon'/>", reptxt:':-??'});
CW.reg_cmp.push({key:/%\-\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/107.gif' alt='%-(' title='%-(' class='ui_emoticon'/>", reptxt:'%-('});
CW.reg_cmp.push({key:/:@\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/49.gif' alt=':@)' title=':@)' class='ui_emoticon'/>", reptxt:':@)'});
CW.reg_cmp.push({key:/3:\-O/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/50.gif' alt='3:-O' title='3:-O' class='ui_emoticon'/>", reptxt:'3:-O'});
CW.reg_cmp.push({key:/:\(\|\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/51.gif' alt=':(|)' title=':(|)' class='ui_emoticon'/>", reptxt:':(|)'});
CW.reg_cmp.push({key:/\~:&gt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/52.gif' alt='~:>' title='~:>' class='ui_emoticon'/>", reptxt:'~:&gt;'});
CW.reg_cmp.push({key:/@\};\-/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/53.gif' alt='@};-' title='@};-' class='ui_emoticon'/>", reptxt:'@};-'});
CW.reg_cmp.push({key:/%%\-/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/54.gif' alt='%%-' title='%%-' class='ui_emoticon'/>", reptxt:'%%-'});
CW.reg_cmp.push({key:/\*\*==/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/55.gif' alt='**==' title='**==' class='ui_emoticon'/>", reptxt:'**=='});
CW.reg_cmp.push({key:/\(~~\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/56.gif' alt='(~~)' title='(~~)' class='ui_emoticon'/>", reptxt:'(~~)'});
CW.reg_cmp.push({key:/~O\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/57.gif' alt='~O)' title='~O)' class='ui_emoticon'/>", reptxt:'~O)'});
CW.reg_cmp.push({key:/\*\-:\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/58.gif' alt='*-:)' title='*-:)' class='ui_emoticon'/>", reptxt:'*-:)'});
CW.reg_cmp.push({key:/8\-X/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/59.gif' alt='8-X' title='8-X' class='ui_emoticon'/>", reptxt:'8-X'});
CW.reg_cmp.push({key:/&gt;;\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/61.gif' alt='>;-)' title='>;-)' class='ui_emoticon'/>", reptxt:'>;-)'});
CW.reg_cmp.push({key:/:\-L/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/62.gif' alt=':-L' title=':-L' class='ui_emoticon'/>", reptxt:':-L'});
CW.reg_cmp.push({key:/\[\-O<;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/63.gif' alt='[-O<;' title='[-O<;' class='ui_emoticon'/>", reptxt:'[-O<;'});
CW.reg_cmp.push({key:/\$\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/64.gif' alt='$-)' title='$-)' class='ui_emoticon'/>", reptxt:'$-)'});
CW.reg_cmp.push({key:/:\-&quot;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/65.gif' alt=':-\"' title=':-\"' class='ui_emoticon'/>", reptxt:':-"'});
CW.reg_cmp.push({key:/b\-\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/66.gif' alt='b-(' title='b-(' class='ui_emoticon'/>", reptxt:'b-('});
CW.reg_cmp.push({key:/:\)>;\-/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/67.gif' alt=':)>;-' title=':)>;-' class='ui_emoticon'/>", reptxt:':)>;-'});
CW.reg_cmp.push({key:/\[\-X/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/68.gif' alt='[-X' title='[-X' class='ui_emoticon'/>", reptxt:'[-X'});
CW.reg_cmp.push({key:/\\:d\//g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/69.gif' alt='\:d/' title='\:d/' class='ui_emoticon'/>", reptxt:'\:d/'});
CW.reg_cmp.push({key:/&gt;:\//g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/70.gif' alt='>;:/' title='>;:/' class='ui_emoticon'/>", reptxt:'>;:/'});
CW.reg_cmp.push({key:/;\)\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/71.gif' alt=';))' title=';))' class='ui_emoticon'/>", reptxt:';))'});
CW.reg_cmp.push({key:/:\-@/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/76.gif' alt=':-@' title=':-@' class='ui_emoticon'/>", reptxt:':-@'});
CW.reg_cmp.push({key:/\^:\)\^/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/77.gif' alt='^:)^' title='^:)^' class='ui_emoticon'/>", reptxt:'^:)^'});
CW.reg_cmp.push({key:/:\-j/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/78.gif' alt=':-j' title=':-j' class='ui_emoticon'/>", reptxt:':-j'});
CW.reg_cmp.push({key:/\(\*\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/79.gif' alt='(*)' title='(*)' class='ui_emoticon'/>", reptxt:'(*)'});
CW.reg_cmp.push({key:/o\-&gt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/72.gif' alt='o->;' title='o->;' class='ui_emoticon'/>", reptxt:'o->;'});
CW.reg_cmp.push({key:/o=&gt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/73.gif' alt='o=>;' title='o=>;' class='ui_emoticon'/>", reptxt:'o=>;'});
CW.reg_cmp.push({key:/o\-\+/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/74.gif' alt='o-+' title='o-+' class='ui_emoticon'/>", reptxt:'o-+'});

CW.reg_cmp.push({key:/:bz/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/115.gif' alt=':bz' title=':bz' class='ui_emoticon'/>", reptxt:':bz'});
CW.reg_cmp.push({key:/\[\.\.\]/g, rep: "<img src='https://s.yimg.com/lq/i/us/msg/emoticons/transformer.gif' alt='[..]' title='[..]' class='ui_emoticon'/>", reptxt:'[..]'});
CW.reg_cmp.push({key:/:\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/1.gif' alt=':)' title=':)' class='ui_emoticon'/>", reptxt:':)'});
CW.reg_cmp.push({key:/:\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/2.gif' alt=':(' title=':(' class='ui_emoticon'/>", reptxt:':('});
CW.reg_cmp.push({key:/;\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/3.gif' alt=';)' title=';)' class='ui_emoticon'/>", reptxt:';)'});
CW.reg_cmp.push({key:/:D/g, rep: "<img src='https://s.yimg.com/pu/emoticon/v2/4.gif' alt=':D' title=':D' class='ui_emoticon'/>", reptxt:':D'});
CW.reg_cmp.push({key:/;;\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/5.gif' alt=';;)' title=';;)' class='ui_emoticon'/>", reptxt:';;)'});
CW.reg_cmp.push({key:/&gt;:D&lt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/6.gif' alt='>:D<' title='>:D<' class='ui_emoticon'/>", reptxt:'>:D<'});
CW.reg_cmp.push({key:/:\-\//g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/7.gif' alt=':-/' title=':-/' class='ui_emoticon'/>", reptxt:':-/'});
CW.reg_cmp.push({key:/:x/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/8.gif' alt=':x' title=':x' class='ui_emoticon'/>", reptxt:':x'});
CW.reg_cmp.push({key:/:&quot;&gt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/9.gif' alt=':\">' title=':\">' class='ui_emoticon'/>", reptxt:':">'});
CW.reg_cmp.push({key:/:P/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/10.gif' alt=':P' title=':P' class='ui_emoticon'/>", reptxt:':P'});
CW.reg_cmp.push({key:/:\-\*/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/11.gif' alt=':-*' title=':-*' class='ui_emoticon'/>", reptxt:':-*'});
CW.reg_cmp.push({key:/=\(\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/12.gif' alt='=((' title='=((' class='ui_emoticon'/>", reptxt:'=(('});
CW.reg_cmp.push({key:/:\-O/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/13.gif' alt=':-O' title=':-O' class='ui_emoticon'/>", reptxt:':-O'});
CW.reg_cmp.push({key:/X\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/14.gif' alt='X(' title='X(' class='ui_emoticon'/>", reptxt:'X('});
CW.reg_cmp.push({key:/:&gt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/15.gif' alt=':>' title=':>' class='ui_emoticon'/>", reptxt:':>'});
CW.reg_cmp.push({key:/B\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/16.gif' alt='B-)' title='B-)' class='ui_emoticon'/>", reptxt:'B-)'});
CW.reg_cmp.push({key:/:\-S/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/17.gif' alt=':-S' title=':-S' class='ui_emoticon'/>", reptxt:':-S'});
CW.reg_cmp.push({key:/#:\-S/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/18.gif' alt='#:-S' title='#:-S' class='ui_emoticon'/>", reptxt:'#:-S'});
CW.reg_cmp.push({key:/&gt;:\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/19.gif' alt='>:)' title='>:)' class='ui_emoticon'/>", reptxt:'>:)'});
CW.reg_cmp.push({key:/:\(\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/20.gif' alt=':((' title=':((' class='ui_emoticon'/>", reptxt:':(('});
CW.reg_cmp.push({key:/:\)\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/21.gif' alt=':))' title=':))' class='ui_emoticon'/>", reptxt:':))'});
CW.reg_cmp.push({key:/:\|/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/22.gif' alt=':|' title=':|' class='ui_emoticon'/>", reptxt:':|'});
CW.reg_cmp.push({key:/\/:\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/23.gif' alt='/:)' title='/:)' class='ui_emoticon'/>", reptxt:'/:)'});
CW.reg_cmp.push({key:/=\)\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/24.gif' alt='=))' title='=))' class='ui_emoticon'/>", reptxt:'=))'});
CW.reg_cmp.push({key:/O:\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/25.gif' alt='O:-)' title='O:-)' class='ui_emoticon'/>", reptxt:'O:-)'});
CW.reg_cmp.push({key:/:\-B/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/26.gif' alt=':-B' title=':-B' class='ui_emoticon'/>", reptxt:':-B'});
CW.reg_cmp.push({key:/=;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/27.gif' alt='=;' title='=;' class='ui_emoticon'/>", reptxt:'=;'});
CW.reg_cmp.push({key:/:\-c/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/101.gif' alt=':-c' title=':-c' class='ui_emoticon'/>", reptxt:':-c'});
CW.reg_cmp.push({key:/:\)\]/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/100.gif' alt=':)]' title=':)]' class='ui_emoticon'/>", reptxt:':)]'});
CW.reg_cmp.push({key:/~X\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/102.gif' alt='~X(' title='~X(' class='ui_emoticon'/>", reptxt:'~X('});
CW.reg_cmp.push({key:/:\-t/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/104.gif' alt=':-t' title=':-t' class='ui_emoticon'/>", reptxt:':-t'});
CW.reg_cmp.push({key:/8\->/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/105.gif' alt='8->' title='8->' class='ui_emoticon'/>", reptxt:'8->'});
CW.reg_cmp.push({key:/I\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/28.gif' alt='I-)' title='I-)' class='ui_emoticon'/>", reptxt:'I-)'});
CW.reg_cmp.push({key:/8\-\|/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/29.gif' alt='8-|' title='8-|' class='ui_emoticon'/>", reptxt:'8-|'});
CW.reg_cmp.push({key:/L\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/30.gif' alt='L-)' title='L-)' class='ui_emoticon'/>", reptxt:'L-)'});
CW.reg_cmp.push({key:/:\-&amp;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/31.gif' alt=':-&' title=':-&' class='ui_emoticon'/>", reptxt:':-&'});
CW.reg_cmp.push({key:/:\-\$/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/32.gif' alt=':-$' title=':-$' class='ui_emoticon'/>", reptxt:':-$'});
CW.reg_cmp.push({key:/\[\-\(/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/33.gif' alt='[-(' title='[-(' class='ui_emoticon'/>", reptxt:'[-('});
CW.reg_cmp.push({key:/:O\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/34.gif' alt=':O)' title=':O)' class='ui_emoticon'/>", reptxt:':O)'});
CW.reg_cmp.push({key:/8\-\}/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/35.gif' alt='8-}' title='8-}' class='ui_emoticon'/>", reptxt:'8-}'});
CW.reg_cmp.push({key:/<:\-P/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/36.gif' alt='<:-P' title='<:-P' class='ui_emoticon'/>", reptxt:'<:-P'});
CW.reg_cmp.push({key:/\(:\|/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/37.gif' alt='(:|' title='(:|' class='ui_emoticon'/>", reptxt:'(:|'});
CW.reg_cmp.push({key:/=P~/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/38.gif' alt='=P~' title='=P~' class='ui_emoticon'/>", reptxt:'=P~'});
CW.reg_cmp.push({key:/:\-\?/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/39.gif' alt=':-?' title=':-?' class='ui_emoticon'/>", reptxt:':-?'});
CW.reg_cmp.push({key:/#\-o/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/40.gif' alt='#-o' title='#-o' class='ui_emoticon'/>", reptxt:'#-o'});
CW.reg_cmp.push({key:/=D>/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/41.gif' alt='=D>' title='=D>' class='ui_emoticon'/>", reptxt:'=D>'});
CW.reg_cmp.push({key:/:\-SS/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/42.gif' alt=':-SS' title=':-SS' class='ui_emoticon'/>", reptxt:':-SS'});
CW.reg_cmp.push({key:/@\-\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/43.gif' alt='@-)' title='@-)' class='ui_emoticon'/>", reptxt:'@-)'});
CW.reg_cmp.push({key:/:\^o/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/44.gif' alt=':^o' title=':^o' class='ui_emoticon'/>", reptxt:':^o'});
CW.reg_cmp.push({key:/:\-w/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/45.gif' alt=':-w' title=':-w' class='ui_emoticon'/>", reptxt:':-w'});
CW.reg_cmp.push({key:/:\-&lt;/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/46.gif' alt=':-<' title=':-<' class='ui_emoticon'/>", reptxt:':-<'});
CW.reg_cmp.push({key:/>:P/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/47.gif' alt='>:P' title='>:P' class='ui_emoticon'/>", reptxt:'>:P'});
CW.reg_cmp.push({key:/<\):\)/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/48.gif' alt='<):)' title='<):)' class='ui_emoticon'/>", reptxt:'<):)'});
CW.reg_cmp.push({key:/X_X/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/109.gif' alt='X_X' title='X_X' class='ui_emoticon'/>", reptxt:'X_X'});
CW.reg_cmp.push({key:/:!!/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/110.gif' alt=':!!' title=':!!' class='ui_emoticon'/>", reptxt:':!!'});
CW.reg_cmp.push({key:/\\m\//g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/111.gif' alt='\m/' title='\m/' class='ui_emoticon'/>", reptxt:'\m/'});
CW.reg_cmp.push({key:/:\-q/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/112.gif' alt=':-q' title=':-q' class='ui_emoticon'/>", reptxt:':-q'});
CW.reg_cmp.push({key:/:\-bd/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/113.gif' alt=':-bd' title=':-bd' class='ui_emoticon'/>", reptxt:':-bd'});
CW.reg_cmp.push({key:/\^#\(\^/g, rep: "<img src='https://s.yimg.com/lq/i/mesg/emoticons7/114.gif' alt='^#(^' title='^#(^' class='ui_emoticon'/>", reptxt:'^#(^'});
CW.reg_cmp.push({key:/:ar!/g, rep: "<img src='https://s.yimg.com/lq/i/us/msg/emoticons/pirate_2.gif' alt=':ar!' title=':ar!' class='ui_emoticon'/>", reptxt:':ar!'});
CW.reg_cmp.push({key:/o\|:\-\)/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/catch.gif' alt='o|:-)' title='o|:-)' class='ui_emoticon'/>", reptxt:'o|:-)'});
CW.reg_cmp.push({key:/~\^o\^~/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/cheer.gif' alt='~^o^~' title='~^o^~' class='ui_emoticon'/>", reptxt:'~^o^~'});
CW.reg_cmp.push({key:/\+_\+/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/cold.gif' alt='+_+' title='+_+' class='ui_emoticon'/>", reptxt:'+_+'});
CW.reg_cmp.push({key:/\[\]\-\-\-/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/cook.gif' alt='[]---' title='[]---' class='ui_emoticon'/>", reptxt:'[]---'});
CW.reg_cmp.push({key:/@\^@\|\|\|/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/dizzy.gif' alt='@^@|||' title='@^@|||' class='ui_emoticon'/>", reptxt:'@^@|||'});
CW.reg_cmp.push({key:/%\*\-\{/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/down_on_luck.gif' alt='%*-{' title='%*-{' class='ui_emoticon'/>", reptxt:'%*-{'});
CW.reg_cmp.push({key:/\^O\^\|\|3/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/eat.gif' alt='^O^||3' title='^O^||3' class='ui_emoticon'/>", reptxt:'^O^||3'});
CW.reg_cmp.push({key:/\[\]==\[\]/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/exercise.gif' alt='[]==[]' title='[]==[]' class='ui_emoticon'/>", reptxt:'[]==[]'});
CW.reg_cmp.push({key:/:\(fight\)/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/fight.gif' alt=':(fight)' title=':(fight)' class='ui_emoticon'/>", reptxt:':(fight)'});
CW.reg_cmp.push({key:/&amp;\[\]/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/gift.gif' alt='&[]' title='&[]' class='ui_emoticon'/>", reptxt:'&[]'});
CW.reg_cmp.push({key:/:\-\(\|\|>/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/give_up.gif' alt=':-(||>' title=':-(||>' class='ui_emoticon'/>", reptxt:':-(||>'});
CW.reg_cmp.push({key:/:\-\)\/\\:\-\)/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/high_five.gif' alt=':-)/\:-)' title=':-)/\:-)' class='ui_emoticon'/>", reptxt:':-)/\:-)'});
CW.reg_cmp.push({key:/:::\^\^:::/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/hot.gif' alt=':::^^:::' title=':::^^:::' class='ui_emoticon'/>", reptxt:':::^^:::'});
CW.reg_cmp.push({key:/\(hot\)/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/hot.gif' alt='(hot)' title='(hot)' class='ui_emoticon'/>", reptxt:'(hot)'});
CW.reg_cmp.push({key:/o\|\^_\^\|o/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/music.gif' alt='o|^_^|o' title='o|^_^|o' class='ui_emoticon'/>", reptxt:'o|^_^|o'});
CW.reg_cmp.push({key:/:\(game\)/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/play_game.gif' alt=':(game)' title=':(game)' class='ui_emoticon'/>", reptxt:':(game)'});
CW.reg_cmp.push({key:/:puke!/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/puke.gif' alt=':puke!' title=':puke!' class='ui_emoticon'/>", reptxt:':puke!'});
CW.reg_cmp.push({key:/@\-@/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/search_me.gif' alt='@-@' title='@-@' class='ui_emoticon'/>", reptxt:'@-@'});
CW.reg_cmp.push({key:/o\|\\~/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/sing.gif' alt='o|\~' title='o|\~' class='ui_emoticon'/>", reptxt:'o|\~'});
CW.reg_cmp.push({key:/:\->~~/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/spooky.gif' alt=':->~~' title=':->~~' class='ui_emoticon'/>", reptxt:':->~~'});
CW.reg_cmp.push({key:/\?@_@\?/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/studying.gif' alt='?@_@?' title='?@_@?' class='ui_emoticon'/>", reptxt:'?@_@?'});
CW.reg_cmp.push({key:/:\(tv\)/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/tv.gif' alt=':(tv)' title=':(tv)' class='ui_emoticon'/>", reptxt:':(tv)'});
CW.reg_cmp.push({key:/%\|\|:\-\{/g, rep: "<img src='https://s.yimg.com/lq/lib/msg/img/aurora/emot/201105/unlucky.gif' alt='%||:-{' title='%||:-{' class='ui_emoticon'/>", reptxt:'%||:-{'});
});