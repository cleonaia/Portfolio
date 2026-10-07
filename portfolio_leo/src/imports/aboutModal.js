// Modal About para Echoday
// Este archivo se puede importar en tu HTML para mostrar el modal About
function showAboutModal() {
  // Insertar el CSS para la barra de scroll si no existe
  if (!document.getElementById('aboutModalScrollbarStyle')) {
    const style = document.createElement('style');
    style.id = 'aboutModalScrollbarStyle';
    style.innerHTML = `
      #aboutModal #aboutText::-webkit-scrollbar {
        width: 12px;
      }
      #aboutModal #aboutText::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #60a8ff 0%, #23ffe3 100%);
        border-radius: 8px;
        border: 2px solid #60a8ff;
        box-shadow: 0 0 8px #23ffe3;
      }
      #aboutModal #aboutText::-webkit-scrollbar-track {
        background: rgba(26,29,38,0.98);
        border-radius: 8px;
      }
      #aboutModal #aboutText {
        scrollbar-color: #60a8ff #181d24;
        scrollbar-width: thin;
      }
    `;
    document.head.appendChild(style);
  }
  let modal = document.getElementById('aboutModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'aboutModal';
    modal.style = `
      display:flex;position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;
      background:rgba(24,29,36,0.82);backdrop-filter:blur(2px);justify-content:center;align-items:center;`
    modal.innerHTML = `
      <div style="background:rgba(26,29,38,0.98);border-radius:28px;box-shadow:0 8px 48px #23ffe355,0 2px 16px #60a8ff22;padding:44px 38px 38px 38px;max-width:520px;width:92vw;text-align:left;color:#fff;font-family:'Montserrat',Arial,sans-serif;font-size:1.13rem;position:relative;animation:fadeup 0.7s cubic-bezier(.23,1.05,.32,1);overflow:hidden;line-height:1.7;letter-spacing:0.01em;margin:0 auto;box-sizing:border-box;">
        <div style='font-size:2.1rem;margin-bottom:18px;color:#23ffe3;font-weight:900;letter-spacing:1.1px;text-align:center;'>Sobre mí <span style='font-size:1.2rem;vertical-align:middle;margin-left:7px;'><i class='fa-solid fa-user-graduate fa-bounce'></i></span></div>
        <div id='aboutText' style='color:#a8e3e0;font-size:1.13rem;font-family:"Poppins",Arial,sans-serif;font-weight:500;line-height:1.7;letter-spacing:0.01em;max-width:440px;margin:0 auto;text-align:left;overflow-y:auto;max-height:60vh;'></div>
        <button id='closeAboutBtn' style='background:linear-gradient(90deg,#23ffe3,#60a8ff 80%);color:#181d24;border:none;border-radius:22px;padding:10px 28px;font-size:1.07rem;font-weight:700;cursor:pointer;font-family:"Montserrat",Arial,sans-serif;margin-top:28px;box-shadow:0 0 8px 1px #42fa7a33;transition:background 0.18s, color 0.15s, transform 0.13s, box-shadow 0.2s;display:block;margin-left:auto;margin-right:auto;'>Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeAboutBtn').onclick = function() {
      modal.style.display = 'none';
    };
    modal.addEventListener('click', function(e){
      if(e.target === modal) modal.style.display = 'none';
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') modal.style.display = 'none';
    });
  } else {
    modal.style.display = 'flex';
  }

  // Usar el sistema de traducción para el texto del modal
  const lang = document.documentElement.lang || 'es';
  const aboutText = (window.translations && window.translations[lang] && window.translations[lang].about_text)
  ? window.translations[lang].about_text
  : `¡Hola! Soy un profesional de Ingeniería de Datos y desarrollo web, apasionado por la innovación y la tecnología. Mi objetivo es aportar soluciones creativas y eficientes que impulsen la transformación digital de empresas y emprendedores, sin importar el sector o la región.\n\nMe motiva crear herramientas y plataformas que faciliten la vida de las personas y los negocios, utilizando datos, inteligencia artificial y automatización para resolver desafíos reales. Creo que la tecnología es un motor de cambio positivo y busco estar siempre a la vanguardia, aprendiendo y aplicando las mejores prácticas del sector.\n\nMi visión es contribuir al crecimiento de empresas competitivas, conectadas y preparadas para el futuro, colaborando con equipos multidisciplinares y compartiendo conocimiento. Si compartes esta pasión por innovar y transformar, ¡conversemos y creemos juntos el próximo gran proyecto!`;
  const el = document.getElementById('aboutText');
  if (el) {
    el.innerHTML = '';
    let i = 0;
    function typeWriter() {
      if (i < aboutText.length) {
        el.innerHTML += aboutText.charAt(i) === '\n' ? '<br>' : aboutText.charAt(i);
        i++;
        setTimeout(typeWriter, aboutText.charAt(i-1) === '.' ? 32 : 13);
      }
    }
    typeWriter();


    
  }
}

