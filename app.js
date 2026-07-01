// ---- i18n / data ----
var I18N = {
  "en": {
    "tagline": "Electric & 50cc motorbike rentals · Da Nang",
    "hero_title": "Rent a motorbike in Da Nang",
    "hero_sub": "Electric & 50cc motorbike rentals. Daily, weekly, monthly.",
    "tab_electric": "Electric motorbikes",
    "tab_50cc": "50cc motorbikes",
    "electric_h": "Electric motorbikes",
    "electric_p": "Quiet, eco-friendly and easy to ride. No gas, no noise — just go.",
    "e_f1": "Electric, zero emissions",
    "e_f2": "No driver license needed",
    "e_f3": "Up to 150 km per charge",
    "e_f4": "Helmet & charger included",
    "cc_h": "50cc motorbikes (brand new)",
    "cc_p": "Reliable, fuel-efficient and easy to ride. Brand new fleet.",
    "cc_f1": "Brand new 50cc",
    "cc_f2": "Full tank included",
    "cc_f3": "Easy to ride",
    "cc_f4": "Helmet included",
    "price_h": "Pricing",
    "tap_hint": "👇 Select a plan, then tap “Book”",
    "day": "Day",
    "week": "Week",
    "month": "Month",
    "best": "Best value",
    "book_electric": "Book an e-bike on WhatsApp",
    "book_50cc": "Book a 50cc on WhatsApp",
    "gallery_h": "Gallery",
    "contact_h": "Get in touch",
    "hours_label": "Hours:",
    "hours_value": "8AM–9PM daily",
    "c_call": "Call",
    "c_map": "Directions",
    "install": "⬇️ Install app",
    "usd_note": "USD prices are approximate",
    "chat_title": "TrangMotorbikers",
    "chat_placeholder": "Type your question…",
    "chat_welcome": "Hi! 👋 Ask me anything about rentals, or tap a question below."
  },
  "vi": {
    "tagline": "Cho thuê xe máy điện & 50cc · Đà Nẵng",
    "hero_title": "Thuê xe máy ở Đà Nẵng",
    "hero_sub": "Cho thuê xe máy điện & 50cc. Theo ngày, tuần, tháng.",
    "tab_electric": "Xe máy điện",
    "tab_50cc": "Xe máy 50cc",
    "electric_h": "Xe máy điện",
    "electric_p": "Êm ái, thân thiện môi trường và dễ lái. Không xăng, không ồn — chỉ cần đi.",
    "e_f1": "Điện, không khí thải",
    "e_f2": "Không cần bằng lái",
    "e_f3": "Đi được 150 km mỗi lần sạc",
    "e_f4": "Kèm mũ bảo hiểm & bộ sạc",
    "cc_h": "Xe máy 50cc (mới 100%)",
    "cc_p": "Bền bỉ, tiết kiệm xăng và dễ lái. Dàn xe mới hoàn toàn.",
    "cc_f1": "50cc mới 100%",
    "cc_f2": "Đầy bình xăng",
    "cc_f3": "Dễ lái",
    "cc_f4": "Kèm mũ bảo hiểm",
    "price_h": "Bảng giá",
    "tap_hint": "👇 Chọn gói, rồi bấm “Đặt xe”",
    "day": "Ngày",
    "week": "Tuần",
    "month": "Tháng",
    "best": "Giá tốt nhất",
    "book_electric": "Đặt xe điện qua WhatsApp",
    "book_50cc": "Đặt xe 50cc qua WhatsApp",
    "gallery_h": "Hình ảnh",
    "contact_h": "Liên hệ",
    "hours_label": "Giờ làm việc:",
    "hours_value": "8h–21h hàng ngày",
    "c_call": "Gọi",
    "c_map": "Bản đồ",
    "install": "⬇️ Cài ứng dụng",
    "usd_note": "Giá USD chỉ tham khảo",
    "chat_title": "TrangMotorbikers",
    "chat_placeholder": "Nhập câu hỏi của bạn…",
    "chat_welcome": "Xin chào! 👋 Hỏi về thuê xe hoặc chạm vào câu hỏi bên dưới."
  }
};

var TEMPL = {
  "electric": {
    "en": "Hello TrangMotorbikers! 🛵 I'd like to RENT AN ELECTRIC MOTORBIKE — plan: {plan}. Please confirm availability and pickup.",
    "vi": "Xin chào TrangMotorbikers! 🛵 Mình muốn THUÊ XE MÁY ĐIỆN — gói: {plan}. Cho mình hỏi còn xe và cách nhận xe nhé."
  },
  "cc50": {
    "en": "Hello TrangMotorbikers! 🛵 I'd like to RENT A 50CC MOTORBIKE — plan: {plan}. Please confirm availability and pickup.",
    "vi": "Xin chào TrangMotorbikers! 🛵 Mình muốn THUÊ XE MÁY 50CC — gói: {plan}. Cho mình hỏi còn xe và cách nhận xe nhé."
  }
};

var WA = {
  "electric": {
    "en": "Hello TrangMotorbikers! 🛵 I'd like to RENT AN ELECTRIC MOTORBIKE. Please share availability and how to pick it up. ",
    "vi": "Xin chào TrangMotorbikers! 🛵 Mình muốn THUÊ XE MÁY ĐIỆN. Cho mình hỏi xe còn trống và cách nhận xe nhé. "
  },
  "cc50": {
    "en": "Hello TrangMotorbikers! 🛵 I'd like to RENT A 50CC MOTORBIKE. Please share availability and how to pick it up. ",
    "vi": "Xin chào TrangMotorbikers! 🛵 Mình muốn THUÊ XE MÁY 50CC. Cho mình hỏi xe còn trống và cách nhận xe nhé. "
  }
};

var PLANS = {
  "e_day":   { "en": "Day (~$6/day)",        "vi": "Ngày (~$6/ngày)" },
  "e_week":  { "en": "Week (~$36/week)",     "vi": "Tuần (~$36/tuần)" },
  "e_month": { "en": "Month (~$76/month)",   "vi": "Tháng (~$76/tháng)" },
  "c_day":   { "en": "Day (~$8/day)",        "vi": "Ngày (~$8/ngày)" },
  "c_week":  { "en": "Week (~$48/week)",     "vi": "Tuần (~$48/tuần)" },
  "c_month": { "en": "Month (~$100/month)",  "vi": "Tháng (~$100/tháng)" }
};

var PHONE = '84707204985';
function waOpen(text){ var url='https://wa.me/'+PHONE+'?text='+encodeURIComponent(text),w=window.open(url,'_blank'); if(!w)location.href=url; }
function waLink(){ return 'https://wa.me/'+PHONE; }

var SAVED = localStorage.getItem('tm_lang');
var lang = SAVED || (navigator.language && navigator.language.toLowerCase().indexOf('vi')===0 ? 'vi' : 'en');

function applyLang(l){
  lang=l; localStorage.setItem('tm_lang',l); document.documentElement.lang=l;
  document.querySelectorAll('[data-i18n]').forEach(function(el){ var k=el.getAttribute('data-i18n'); if(I18N[l][k]) el.textContent=I18N[l][k]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){ var k=el.getAttribute('data-i18n-placeholder'); if(I18N[l][k]) el.placeholder=I18N[l][k]; });
  document.querySelectorAll('.lang-btn').forEach(function(b){ b.classList.toggle('active', b.dataset.lang===l); });
  if(typeof window.refreshChat==='function') window.refreshChat(l);
}
document.querySelectorAll('.lang-btn').forEach(function(b){ b.addEventListener('click', function(){ applyLang(b.dataset.lang); }); });

// tabs
var electric=document.getElementById('electric'), cc50=document.getElementById('cc50');
function show(target){
  electric.classList.toggle('hidden', target!=='electric');
  cc50.classList.toggle('hidden', target!=='cc50');
  document.querySelectorAll('.tab').forEach(function(t){ t.classList.toggle('active', t.dataset.target===target); });
}
document.querySelectorAll('.tab').forEach(function(t){ t.addEventListener('click', function(){ show(t.dataset.target); }); });

// plan selection (does NOT open WhatsApp; just selects)
var selected = { electric:null, cc50:null };
document.querySelectorAll('.price-card[data-plan]').forEach(function(card){
  card.addEventListener('click', function(){
    var svc=card.dataset.svc;
    selected[svc]=card.dataset.plan;
    document.querySelectorAll('.price-card[data-svc="'+svc+'"]').forEach(function(c){ c.classList.toggle('selected', c===card); });
  });
});

// Book button: opens WhatsApp with the selected plan (or generic if none)
document.querySelectorAll('[data-wa]').forEach(function(btn){
  btn.addEventListener('click', function(){
    var svc=btn.dataset.wa; var plan=selected[svc];
    if(plan){ var planText=(PLANS[plan]&&PLANS[plan][lang])||plan; waOpen(TEMPL[svc][lang].replace('{plan}', planText)); }
    else { waOpen(WA[svc][lang]); }
  });
});

// gallery lightbox
var lb=document.getElementById('lightbox'), lbImg=document.getElementById('lightbox-img');
document.querySelectorAll('.gallery img').forEach(function(img){ img.addEventListener('click', function(){ lbImg.src=img.src; lb.classList.remove('hidden'); }); });
lb.addEventListener('click', function(){ lb.classList.add('hidden'); lbImg.src=''; });

// install prompt
var deferred; var installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt', function(e){ e.preventDefault(); deferred=e; installBtn.classList.remove('hidden'); });
installBtn.addEventListener('click', function(){ if(!deferred)return; deferred.prompt(); deferred=null; installBtn.classList.add('hidden'); });

try { if('serviceWorker' in navigator && location.protocol.indexOf('http')===0){ navigator.serviceWorker.register('sw.js').catch(function(){}); } } catch(e){}

applyLang(lang);
