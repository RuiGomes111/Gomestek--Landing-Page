const devW= document.getElementById('devW');
const hardware= document.getElementById('hardware');
const trafego= document.getElementById('trafego');
const consultoria= document.getElementById('consultoria');
const desenvolvimento= document.getElementById('desenvolvimento');
const img= document.querySelector('.red img');
const paragrafo= document.getElementById('paragrafo')


trafego.addEventListener("click",trafegoEvt)

function trafegoEvt(){
    devW.setAttribute("style", "background: none")
    trafego.setAttribute("style", "background: #FF9C12");
    hardware.setAttribute("style", "background: none");
    consultoria.setAttribute("style", "background: none");
    desenvolvimento.textContent= `Tráfego pago / Links patrocinados`
    paragrafo.textContent=`Somos especialistas em links patrocinados e tráfego pago, 
    ajudando empresas a alcançar mais clientes e crescer no ambiente digital. Com estratégias 
    focadas em resultados, criamos campanhas personalizadas que posicionam sua marca no topo e aumentam suas conversões` 

    img.src="/assets/img/trafego.webp"
}

devW.addEventListener("click", dvwEvent)

function dvwEvent(){
    devW.setAttribute("style", "background: #FF9C12");
    trafego.setAttribute("style", "background: none");
    hardware.setAttribute("style", "background: none");
    consultoria.setAttribute("style", "background: none");
    desenvolvimento.textContent= `Criação de sites / Páginas web`;
     img.src="/assets/img/ex.webp";
    paragrafo.textContent=`Nossa empresa é especializada no desenvolvimento de páginas e sites web, 
                        oferecendo soluções completas para empresas e profissionais que desejam ter uma presença forte e 
                        impactante no ambiente digital. <br>
                        Combinamos tecnologia, criatividade e 
                        funcionalidade para criar sites que não só representam sua marca, mas também geram resultados.` 


}

hardware.addEventListener("click",hardwareEvent)

function hardwareEvent(){
    consultoria.setAttribute("style", "background: none");
    devW.setAttribute("style", "background: none");
    trafego.setAttribute("style", "background: none");
    hardware.setAttribute("style", "background: #FF9C12");
    desenvolvimento.textContent= ` Hardware / Software & Redes`;
    img.src="/assets/img/hardware1.webp";
    paragrafo.textContent=`
Na GomesTek, somos especializados em oferecer serviços de qualidade e confiança na reparação e manutenção de computadores 
e em soluções completas para redes. 
Nosso compromisso é garantir que você tenha sempre equipamentos e sistemas funcionando de forma eficiente..`
}

consultoria.addEventListener("click", consultoriaEvent)

function consultoriaEvent(){
    devW.setAttribute("style", "background: none");
    trafego.setAttribute("style", "background: none");
    hardware.setAttribute("style", "background: none");
    consultoria.setAttribute("style", "background: #FF9C12");
    desenvolvimento.textContent= `Consultoria DE Compras On-line`;
    img.src="/assets/img/mentoria.webp";
    paragrafo.textContent=`Facilitamos o acesso a oportunidades globais, ajudando nossos clientes a importar e exportar com eficiência, segurança e economia.`
}


AOS.init({
    duration: 800, // Duração da animação
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
