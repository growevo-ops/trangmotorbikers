// ---- Chat widget (client-side only, no backend) ----
(function(){
  var CHAT = {
    "en": {
      "quick": [
        {key:"prices",  label:"Prices"},
        {key:"charge",  label:"How do I charge it?"},
        {key:"helmets", label:"Helmets included?"},
        {key:"monthly", label:"Monthly rental"},
        {key:"location",label:"Location"},
        {key:"book",    label:"Book now"}
      ],
      "answers": {
        "prices":  "Electric: 150.000₫/day, 900.000₫/week, 1.900.000₫/month.\nGas-powered (50cc+): 200.000₫/day, 1.200.000₫/week, 2.500.000₫/month.\nMonthly = best value! 💰",
        "charge":  "Every e-bike comes with a charger. Charge at any standard socket — full charge ~3h, range up to 150 km. 🔌",
        "helmets": "Yes! A helmet is included with every rental, free of charge. 🪖",
        "monthly": "Monthly is our best value:\nElectric 1.900.000₫ (~$76)\nGas-powered (50cc+) 2.500.000₫ (~$100)\nTap “Book now” to reserve. 📅",
        "location":"Doc tuong rao san bay Nuoc Man, Vo Nguyen Giap, Ngu Hanh Son, Da Nang.\nOpen 8AM–9PM daily. 📍",
        "book":    "Great! Tap below to message us on WhatsApp and we'll confirm your booking. 👇"
      },
      "fallback": "I can help with prices, charging, helmets, monthly rental and location. For anything else, message us on WhatsApp 👇",
      "wa_button": "Message on WhatsApp",
      "wa_text": "Hello TrangMotorbikers! 🛵 I'd like to rent a motorbike. Please share availability.",
      "welcome": "Hi! 👋 Ask me anything about rentals, or tap a question below."
    },
    "vi": {
      "quick": [
        {key:"prices",  label:"Giá giá"},
        {key:"charge",  label:"Sạc xe như nào?"},
        {key:"helmets", label:"Có mũ bảo hiểm?"},
        {key:"monthly", label:"Thuê theo tháng"},
        {key:"location",label:"Địa chỉ"},
        {key:"book",    label:"Đặt xe"}
      ],
      "answers": {
        "prices":  "Xe điện: 150.000₫/ngày, 900.000₫/tuần, 1.900.000₫/tháng.\nXe động cơ (50cc trở lên): 200.000₫/ngày, 1.200.000₫/tuần, 2.500.000₫/tháng.\nThuê tháng = giá tốt nhất! 💰",
        "charge":  "Mỗi xe điện kèm bộ sạc. Sạc tại ổ cắm tiêu chuẩn — sạc đầy ~3h, đi được 150 km. 🔌",
        "helmets": "Có! Mũ bảo hiểm kèm miễn phí cho mỗi lượt thuê. 🪖",
        "monthly": "Thuê tháng là giá tốt nhất:\nXe điện 1.900.000₫ (~$76)\nXe động cơ (50cc trở lên) 2.500.000₫ (~$100)\nBấm “Đặt xe” để giữ xe. 📅",
        "location":"Doc tuong rao san bay Nuoc Man, Vo Nguyen Giap, Ngu Hanh Son, Đà Nẵng.\nMở cửa 8h–21h hàng ngày. 📍",
        "book":    "Tuyệt! Bấm bên dưới để nhắn trên WhatsApp, mình sẽ xác nhận đặt xe. 👇"
      },
      "fallback": "Mình hỗ trợ về giá, sạc xe, mũ bảo hiểm, thuê tháng và địa chỉ. Việc khác xin nhắn WhatsApp 👇",
      "wa_button": "Nhắn WhatsApp",
      "wa_text": "Xin chào TrangMotorbikers! 🛵 Mình muốn thuê xe máy. Cho mình hỏi xe còn trống nhé.",
      "welcome": "Xin chào! 👋 Hỏi về thuê xe hoặc chạm vào câu hỏi bên dưới."
    }
  };

  // keyword -> answer key
  var KEYWORDS = {
    "prices":   ["price","prices","cost","how much","rate","rates","fee","fees","deal","giá","bao nhiêu","phí","bảng giá","giá giá"],
    "charge":   ["charge","charger","charging","battery","plug","power","sạc","xạc","pin","sạc xe","sạc điện"],
    "helmets":  ["helmet","helmets","mũ","mu bảo hiểm","mũ bảo hiểm","bảo hiểm"],
    "monthly":  ["month","monthly","long term","long-term","tháng","cả tháng","dài hạn","theo tháng"],
    "location": ["where","location","address","map","directions","find","đâu","địa chỉ","vị trí","bản đồ","chỗ"],
    "book":     ["book","booking","rent","rental","reserve","hire","đặt","thuê","đặt xe","mướn","giữ xe"]
  };

  var KEYWORDS_VI = {
    "prices":   ["giá","bao nhiêu","phí","bảng giá"],
    "charge":   ["sạc","xạc","pin"],
    "helmets":  ["mũ","bảo hiểm"],
    "monthly":  ["tháng","dài hạn"],
    "location": ["đâu","địa chỉ","vị trí","bản đồ","chỗ"],
    "book":     ["đặt","thuê","mướn","giữ"]
  };

  var toggle=document.getElementById('chatToggle');
  var box=document.getElementById('chatBox');
  var closeBtn=document.getElementById('chatClose');
  var log=document.getElementById('chatLog');
  var replies=document.getElementById('chatReplies');
  var form=document.getElementById('chatForm');
  var input=document.getElementById('chatInput');
  var started=false;

  function t(){ return CHAT[lang] || CHAT.en; }

  function addMsg(text, who, isHtml){
    var d=document.createElement('div');
    d.className='chat-msg '+(who==='user'?'user':'bot');
    if(isHtml){ d.innerHTML=text; } else { d.textContent=text; }
    log.appendChild(d);
    log.scrollTop=log.scrollHeight;
  }

  function addWaButton(){
    var c=t();
    var d=document.createElement('div');
    d.className='chat-msg bot';
    var a=document.createElement('a');
    a.href='https://wa.me/84707204985?text='+encodeURIComponent(c.wa_text);
    a.target='_blank'; a.rel='noopener';
    a.textContent=c.wa_button;
    a.style.display='inline-block'; a.style.fontWeight='700';
    d.appendChild(a);
    log.appendChild(d);
    log.scrollTop=log.scrollHeight;
  }

  function answer(key){
    var c=t();
    if(key==='book'){ addMsg(c.answers.book,'bot'); addWaButton(); return; }
    addMsg(c.answers[key],'bot');
  }

  function matchKey(text){
    var s=text.toLowerCase().trim();
    if(!s) return null;
    var order = (lang==='vi') ? ['book','prices','charge','helmets','monthly','location'] : ['book','prices','charge','helmets','monthly','location'];
    for(var i=0;i<order.length;i++){
      var k=order[i];
      var words = (lang==='vi') ? (KEYWORDS_VI[k]||[]).concat(KEYWORDS[k]||[]) : KEYWORDS[k]||[];
      for(var j=0;j<words.length;j++){
        if(s.indexOf(words[j])!==-1) return k;
      }
    }
    return null;
  }

  function handleText(text){
    addMsg(text,'user');
    var k=matchKey(text);
    if(k){ answer(k); }
    else { addMsg(t().fallback,'bot'); addWaButton(); }
  }

  function renderReplies(){
    replies.innerHTML='';
    t().quick.forEach(function(q){
      var b=document.createElement('button');
      b.className='qr-btn';
      b.textContent=q.label;
      b.addEventListener('click', function(){
        addMsg(q.label,'user');
        answer(q.key);
      });
      replies.appendChild(b);
    });
  }

  function open(){
    box.classList.remove('hidden');
    if(!started){
      addMsg(t().welcome,'bot');
      started=true;
    }
    renderReplies();
    input.focus();
  }

  function close(){ box.classList.add('hidden'); }

  toggle.addEventListener('click', function(){ if(box.classList.contains('hidden')) open(); else close(); });
  closeBtn.addEventListener('click', close);
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var v=input.value.trim();
    if(!v) return;
    handleText(v);
    input.value='';
  });

  window.refreshChat=function(l){
    if(!box.classList.contains('hidden')){
      renderReplies();
    }
  };

  document.addEventListener('click', function(e){
    if(box.classList.contains('hidden')) return;
    if(!box.contains(e.target) && e.target!==toggle && !toggle.contains(e.target)) close();
  });
})();
