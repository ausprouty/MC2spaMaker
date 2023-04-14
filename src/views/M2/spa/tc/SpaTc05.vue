<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-tc-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>5.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO  PUEDE  USTED SER  UN TESTIGO  FRUCTÍFERO?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 5.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE USTED SER UN TESTIGO FRUCT&Iacute;FERO?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ LA AVENTURA DE TESTIFICAR DE CRISTO</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p>Una de mis responsabilidades al dirigir la Cruzada Estudiantil y Profesional para Cristo, es reunirme cada a&ntilde;o con los directores del ministerio de cada continente.</p>

<p>Frecuentemente, en mis viajes a Asia y Europa visito a nuestros coordinadores y me re&uacute;no con miles de pastores y laicos. En una ocasi&oacute;n, mientras me reun&iacute;a con un grupo de l&iacute;deres cristianos, compart&iacute; con ellos algunas de las se&ntilde;ales m&aacute;s sobresalientes de la gran cosecha espiritual que se est&aacute; llevando a cabo a nivel mundial. Uno de los l&iacute;deres me interrumpi&oacute; y dijo: &ldquo;Estoy asombrado con su informe, pero quiero ser muy franco con usted. Hasta ahora yo nunca he experimentado un ministerio as&iacute;. &iquest;Por qu&eacute; no tengo un ministerio m&aacute;s fruct&iacute;fero?&rdquo;</p>

<p>Tal vez usted se est&eacute; preguntando lo mismo. En las p&aacute;ginas siguientes, quiero compartirle un plan b&iacute;blico que le permitir&aacute; ser fruct&iacute;fero al testificar de nuestro Se&ntilde;or, dondequiera que vaya, en cualquier lugar y bajo todo tipo de circunstancias.</p>

<p>Sin embargo, antes de compartirle ese plan, perm&iacute;tame llamar su atenci&oacute;n al cap&iacute;tulo cinco del Evangelio de San Lucas, el cual relata un incidente en la vida de un pescador experimentado - Sim&oacute;n Pedro. &Eacute;l y sus compa&ntilde;eros de faena hab&iacute;an pasado toda la noche arrojando y recogiendo sus redes, pero no hab&iacute;an atrapado ni un solo pez.</p>

<p>Jes&uacute;s observ&oacute; a estos hombres cuando estaban lavando sus redes y le pidi&oacute; a Pedro que empujara la barca un poco dentro del lago, para que &Eacute;l pudiera sentarse en ella y hablar a las multitudes que estaban alrededor suyo.</p>

<p>Cuando termin&oacute; de hablar, Jes&uacute;s le hizo una promesa a este pescador - una promesa que probablemente Pedro, cansado por el esfuerzo in&uacute;til de una noche de pesca, al escucharla pens&oacute; que era una tonter&iacute;a -. Jes&uacute;s le dijo a Pedro que remara mar adentro y que echara sus redes, pues as&iacute; lograr&iacute;a pescar. El evangelista Lucas anot&oacute; la respuesta de Pedro y lo que sucedi&oacute; luego:</p>

<div class="quote-left">Maestro, toda la noche hemos estado trabajando, y nada hemos pescado; mas en tu palabra echar&eacute; la red. Y habi&eacute;ndolo hecho, encerraron gran cantidad de peces, y su red se romp&iacute;a.&nbsp; Y entonces hicieron se&ntilde;as a los compa&ntilde;eros que estaban en la otra barca, para que viniesen a ayudarles; &laquo; y vinieron, y llenaron ambas barcas, de tal manera que se hund&iacute;an.</div>

<p>Jes&uacute;s dijo a estos pescadores que quedaron impresionados con la demostraci&oacute;n de Su poder, &ldquo;desde ahora ser&eacute;is pescadores de hombres.&rdquo; Ellos quedaron tan sobrecogidos por la presencia y el poder de Jes&uacute;s que dejaron su trabajo para seguirlo.</p>

<p>En la vida no hay una experiencia m&aacute;s emocionante y m&aacute;s valiosa espiritualmente, que la aventura de pescar hombres para Cristo. Conforme usted siga las instrucciones del Se&ntilde;or, su red tambi&eacute;n puede llenarse - aunque nunca haya hablado de Cristo con alguien y aunque sea tan esc&eacute;ptico como Pedro -. Pero si tambi&eacute;n es obediente como Pedro, el Se&ntilde;or Jesus le honrar&aacute; con muchas personas que respondan a su testimonio.</p>

<p>En todas partes del mundo he formulado dos preguntas b&aacute;sicas a millones de cristianos - j&oacute;venes y viejos, ricos y pobres, cristianos nuevos y personas que han sido creyentes por m&aacute;s de medio siglo. Les he hecho estas preguntas a algunos de los cristianos m&aacute;s ricos y famosos del mundo. Las respuestas son siempre las mismas, no importa a quien le pregunte.</p>

<ol>
	<li>&iquest;Cu&aacute;l ha sido la experiencia m&aacute;s importante de su vida? &ldquo;Conocer a Cristo como mi Salvador, es absolutamente la experiencia m&aacute;s importante en mi vida,&rdquo; es la inevitable respuesta.</li>
	<li>&iquest;Qu&eacute; es lo m&aacute;s importante que usted puede hacer para ayudar a otra persona? De nuevo, todas las respuestas siempre coinciden &ldquo;Ayudarle a conocer a Cristo.&rdquo;</li>
</ol>

<p>Estoy seguro que, si usted es cristiano, responder&iacute;a de la misma manera. Sin embargo, cu&aacute;n triste es saber que son muy pocos los cristianos que est&aacute;n hablando de Cristo a otros. Salta a la vista que algo est&aacute; mal. Si usted es como la mayor&iacute;a de los cristianos de la actualidad, nunca habr&aacute; llevado entonces una persona a Cristo. Sin embargo a usted le gustar&iacute;a hacerlo, y en su coraz&oacute;n sabe que eso es lo que Dios quiere que usted haga. Jes&uacute;s llama a todo creyente, &ldquo;Venid en pos de m&iacute;, y os har&eacute; pescadores de hombres.&rdquo;</p>

<p>Cuando comience a llenar sus redes con personas a quienes les presente a Cristo, usted estar&aacute; comenzando la aventura m&aacute;s emocionante, m&aacute;s gozosa y m&aacute;s valiosa que la vida puede ofrecer. Quiz&aacute;s, al igual que los disc&iacute;pulos, usted dejar&aacute; las &ldquo;redes&rdquo; de sus estudios, los negocios o actividades profesionales, para seguirlo en esta gran aventura de testificar de nuestro Se&ntilde;or en su Jerusal&eacute;n, su Judea, su Samaria y en todos los pa&iacute;ses del mundo.</p>

<p>El plan b&iacute;blico que quiero compartirle puede ser dividido en dos grandes categor&iacute;as: la preparaci&oacute;n personal y tomando la iniciativa.</p>

</div>

<p>&nbsp;</p>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ PASOS PARA LA PREPARACI&Oacute;N PERSONAL</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p>La preparaci&oacute;n personal es la clave para llegar a ser un cristiano fruct&iacute;fero. Si usted sigue estos pasos cuidadosamente y en oraci&oacute;n, transformar&aacute;n su vida y su manera de testificar de nuestro amado Se&ntilde;or.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h3>+ 1. Est&eacute; seguro de que usted mismo es cristiano</h3></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p>Hay millones de personas buenas, morales y religiosas que son muy activas en la iglesia pero que no est&aacute;n seguras de una relaci&oacute;n personal y eterna con Dios. No est&aacute;n seguras de que al morir, ir&aacute;n al cielo. En cientos de nuestras capacitaciones, a las cuales asisten los miembros m&aacute;s dedicados y sinceros de las iglesias de cada comunidad, por lo general de diez a veinticinco personas indican haber recibido a Cristo, u obtenido seguridad de su salvaci&oacute;n, como resultado de la capacitaci&oacute;n.</p>

<p>Perm&iacute;tame darle un ejemplo. Una joven destacada vino para unirse a nuestro equipo de coordinadores. Mi esposa y yo est&aacute;bamos muy impresionados con ella y ten&iacute;amos plena confianza de que tendr&iacute;a un gran ministerio para nuestro Se&ntilde;or. Esta joven proven&iacute;a de una magn&iacute;fica familia cristiana. Hab&iacute;a asistido a un jard&iacute;n de ni&ntilde;os cristiano, a una escuela primaria cristiana, a un colegio secundario cristiano y a una universidad cristiana. Era un l&iacute;der muy activa en su iglesia y presidente de la Asociaci&oacute;n de Mujeres Cristianas de su &aacute;rea. Inclusive hab&iacute;a servido como consejera en muchas cruzadas de Billy Graham. Esta atractiva y din&aacute;mica joven, exhib&iacute;a todas las cualidades que usted desear&iacute;a encontrar en un cristiano radiante y fruct&iacute;fero.</p>

<p>Poco despu&eacute;s cuando me dirig&iacute;a a los nuevos coordinadores en una sesi&oacute;n de capacitaci&oacute;n, enfatic&eacute; la importancia de ser sensible a las necesidades de los cristianos que no estaban seguros de su salvaci&oacute;n. &ldquo;Nunca den por hecho que los que est&aacute;n inseguros de su salvaci&oacute;n son cristianos, aunque muchas veces hayan seguido los pasos de recibir a Cristo,&rdquo; les dije. &ldquo;Ustedes no deben tratar de convencerles de que son cristianos, a quienes tienen dudas acerca de su salvaci&oacute;n. En vez de eso, se debe suponer que no lo son y en oraci&oacute;n hay que aconsejarles y guiarlos hacia la seguridad de su salvaci&oacute;n.&rdquo;</p>

<p>Al finalizar mi charla, esta joven me dijo, &ldquo;Creo que no soy cristiana. Siempre he dudado de mi salvaci&oacute;n.&rdquo;</p>

<p>Durante a&ntilde;os, hab&iacute;a recurrido a varios l&iacute;deres cristianos en busca de consejo espiritual, coment&aacute;ndoles que no estaba segura de su salvaci&oacute;n en Cristo. Como ella cre&iacute;a todas las doctrinas b&aacute;sicas de la fe, ellos afirmaban que en efecto era cristiana, y oraban con ella y la animaban.</p>

<p>Sin embargo, a pesar de que oraban con ella, esta joven nunca estaba segura de que Dios o&iacute;a su oraci&oacute;n. &ldquo;No hay ninguna evidencia de que Cristo haya entrado en mi vida,&rdquo; dijo. &ldquo;Me temo que morir&eacute; sin Cristo.&rdquo;</p>

<p>Ese d&iacute;a tuve el privilegio de compartir las Buenas Nuevas de Efesios 2:8,9 con esta querida joven que hab&iacute;a estado expuesta al cristianismo toda su vida. Esta vez, el Esp&iacute;ritu Santo le permiti&oacute; confiar en Dios y en Su Palabra. Por fe, ella recibi&oacute; al Se&ntilde;or Jes&uacute;s, el regalo de la gracia del amor de Dios, y su coraz&oacute;n se llen&oacute; de gozo y alabanza con la seguridad de su salvaci&oacute;n. Estaba tan emocionada que llam&oacute; a sus padres, a mi esposa y a otros, para contarles las buenas noticias de que al morir ir&iacute;a al cielo.</p>

<div class="block-quote">El llegar a ser cristiano implica un compromiso de la persona completa, el cual puede ser ilustrado mejor por la relaci&oacute;n que se requiere en el matrimonio.</div>

<p>Uno de mis amigos m&aacute;s queridos durante mis d&iacute;as en el seminario b&iacute;blico era hijo de un famoso evangelista. Este proven&iacute;a de un hogar santo y piadoso. Siendo estudiantes nos reun&iacute;amos con frecuencia para orar. El memorizaba cientos de vers&iacute;culos de la Biblia y viv&iacute;a una vida tan disciplinada que era a la vez un desaf&iacute;o y una inspiraci&oacute;n constante para m&iacute;. Tuve el privilegio de ser padrino en su boda.</p>

<p>Mi amigo observaba una dieta especial de alimentos baratos durante d&iacute;as, lo que le permit&iacute;a vivir gastando entre doce y quince centavos diarios, para as&iacute; poder aportar m&aacute;s dinero para las misiones. Hab&iacute;a concluido los estudios teol&oacute;gicos para su licenciatura y estaba ya estudiando su doctorado en teolog&iacute;a, cuando me llam&oacute; para decirme, &ldquo;Bill, &iexcl;reci&eacute;n he llegado a ser cristiano!&rdquo;</p>

<p>Yo estaba sorprendido. &ldquo;T&uacute; eres uno de los mejores cristianos que he conocido&rdquo;, insist&iacute;. &ldquo;Estoy seguro de que has tenido alg&uacute;n tipo de experiencia emocional.&rdquo;</p>

<p>&ldquo;No&rdquo;, me dijo, &ldquo;reci&eacute;n he llegado a ser cristiano.&rdquo;</p>

<p>Entonces me explic&oacute; que durante todos estos a&ntilde;os, aunque nunca lo comentaba, hab&iacute;a experimentado conflictos e incertidumbre. A pesar de que hab&iacute;a invitado a Cristo a su vida varias veces, nunca hab&iacute;a estado seguro de que &Eacute;l hab&iacute;a entrado a su vida para ser su Salvador. Nunca hab&iacute;a tenido plena seguridad de su salvaci&oacute;n.</p>

<p>Quiz&aacute;s usted mismo nunca ha experimentado la maravilla y el gozo de saber con seguridad que Cristo vive en usted, que sus pecados han sido perdonados y que es un hijo de Dios. Tal vez ha cre&iacute;do en Cristo intelectualmente por a&ntilde;os. Tal vez hasta sea muy activo en su iglesia; quiz&aacute; se considere una persona muy moral, religiosa y consagrada ante los ojos de sus vecinos, sin embargo, es posible que nunca haya experimentado este nuevo nacimiento.</p>

<p>El llegar a ser cristiano implica un compromiso de la persona completa, el cual puede ser ilustrado mejor por la relaci&oacute;n que se requiere en el matrimonio. Hace muchos a&ntilde;os, por ejemplo, conoc&iacute; a una joven muy hermosa a quien consideraba la persona m&aacute;s maravillosa del mundo. Conforme nos conocimos m&aacute;s, llegamos a enamorarnos y nos casamos. Pero no nos casamos s&oacute;lo porque &eacute;ramos intelectualmente afines y nos admir&aacute;bamos mutuamente, ni porque est&aacute;bamos afectados emocionalmente y nos am&aacute;bamos. Nos comprometimos mediante un acto de nuestras voluntades, por fe, cuando un d&iacute;a nos presentamos delante de un ministro y nos convertimos en marido y mujer. En ese momento, con dos palabras, &ldquo;S&iacute; quiero&rdquo;, quedamos legalmente casados.</p>

<p>Como resultado, ella dej&oacute; su hogar, y yo dej&eacute; el m&iacute;o, y juntos comenzamos un tercer hogar. Ahora, cuando dije &ldquo;s&iacute; quiero&rdquo;, no hubo una gran emoci&oacute;n. Las paredes no temblaron, ni hubieron truenos y rel&aacute;mpagos. En realidad, yo me sent&iacute;a un poco paralizado. Sin embargo, nosotros no dejamos de estar casados s&oacute;lo porque en este momento no estemos gritando de alegr&iacute;a. Esas dos palabras que expresaron el deseo de nuestros corazones, consumaron nuestro largo noviazgo de tres a&ntilde;os. Mi amor por Vonette ha crecido a trav&eacute;s de los a&ntilde;os, y yo le he dicho que la amo miles de veces desde esa memorable ceremonia nupcial. Sin embargo, no le he propuesto matrimonio de nuevo desde que nos dijimos, &ldquo;S&iacute;, quiero.&rdquo;</p>

<p>Lo mismo ocurre en su relaci&oacute;n con Cristo. El compromiso con Cristo incluye toda su persona; su intelecto, sus emociones, y su voluntad. No es suficiente creer intelectualmente que Jesuscristo es el Hijo de Dios, ni saber que &Eacute;l muri&oacute; en la cruz por sus pecados y que fue levantado de la muerte; ni el ser bautizado, ni estar activo en la iglesia, ni solo leer su Biblia y orar diariamente. Usted no llega a ser cristiano hasta que por fe, por un acto de su voluntad, recibe el regalo de la gracia de Dios, Su amor y perd&oacute;n por medio del Se&ntilde;or Jesucristo. Cuando lo recibe por fe, tambi&eacute;n recibe una naturaleza nueva; nace en la familia de Dios y comienza a experimentar la realidad de la vida eterna.</p>

<p>Si nunca le ha dicho a Cristo, &ldquo;Te recibo como mi Salvador del pecado y el Se&ntilde;or de mi vida,&rdquo; le animo a hacerlo ahora. Jes&uacute;s dijo, &ldquo;He aqu&iacute;, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entrar&eacute; a &eacute;l..&rdquo;!</p>

<p>P&iacute;dale que entre en su vida. Luego, en la autoridad de Su promesa, agrad&eacute;zcale que ha entrado como &Eacute;l lo ha prometido. El no le miente.</p>

<p>Despu&eacute;s que le ha recibido, nunca lo insulte pidi&eacute;ndole que entre a su vida de nuevo. Por el resto de su vida, comience cada d&iacute;a agradeci&eacute;ndole por su presencia en usted.</p>

<p>&Eacute;l ha prometido estar con usted siempre, y &Eacute;l dijo, &ldquo;No te dejar&eacute; ni te desamparar&eacute;.&rdquo;</p>

<p>Yo enfatic&eacute; este tema de la fe en uno de nuestros Institutos de Evangelizaci&oacute;n para Laicos en nuestra ciudad. Al finalizar mi conferencia, una mujer ya en el crep&uacute;sculo de su vida, se me acerc&oacute; con l&aacute;grimas en los ojos y me dijo que hab&iacute;a sido maestra de Escuela Dominical en una iglesia por cuarenta a&ntilde;os.</p>

<div class="quote-left">Casi no ha pasado un solo d&iacute;a durante los &uacute;ltimos cuarenta a&ntilde;os en el que no le haya pedido a Cristo que entre en mi vida&rdquo;, dijo. &ldquo;Pero nunca estuve segura de que &Eacute;l estuviera all&iacute;. Desde esta noche y por el resto de mi vida le dir&eacute;,&rdquo; Gracias Se&ntilde;or porque T&uacute; est&aacute;s en mi coraz&oacute;n. Nunca m&aacute;s te voy a insultar pidi&eacute;ndote que de nuevo entres en mi vida, porque ahora estoy segura de que Tu ya has entrado.&rdquo;</div>

<p>&iquest;Har&aacute; usted lo mismo? Si nunca lo ha hecho, h&aacute;galo ahora. Haga una pausa, y si la siguiente oraci&oacute;n expresa el deseo de su coraz&oacute;n, h&aacute;gala suya:</p>

<div class="quote-right">Se&ntilde;or Jes&uacute;s, te necesito. Te abro la puerta de mi vida y te recibo como mi Salvador y mi Se&ntilde;or. Gracias por perdonar mis pecados. Toma el control del trono de mi vida. Hazme la clase de persona que T&uacute; quieres que yo sea.</div>

<p>Gracias por entrar en mi vida. Por el resto de mi vida te agradecer&eacute; que est&aacute;s en m&iacute; y porque nunca me dejar&aacute;s. Gracias porque ahora tengo vida eterna como T&uacute; lo prometiste.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ 2. Aseg&uacute;rese de que no haya pecado inconfeso en su vida.</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>Si algunas actitudes o acciones pecaminosas est&aacute;n obstaculizando su comuni&oacute;n con Dios, &Eacute;l no podr&aacute; vivir y amar a trav&eacute;s suyo. Usted no podr&aacute; ser un cristiano gozoso, ni un testigo fruct&iacute;fero para Cristo.</p>

<p>Seg&uacute;n Hebreos cap&iacute;tulo 10, Cristo vino como sacrificio de Dios por sus pecados. El Antiguo Testamento de la Biblia registra que los israelitas le llevaban al sacerdote un animal, el cual era sacrificado. Luego su sangre era derramada en el altar para cubrir los pecados de todo el pueblo. Despu&eacute;s, en el cumplimiento del tiempo y prop&oacute;sito de Dios, habiendo sido profetizado por los profetas del Antiguo Testamento, Jesucristo, el Mes&iacute;as, vino a morir por usted. El vino como el sacrificio de Dios para derramar su sangre en la cruz por sus pecados, como resultado de esta acci&oacute;n, no hay necesidad de realizar ning&uacute;n otro sacrificio por sus pecados.</p>

<p>Usted no puede a&ntilde;adir nada a la seguridad de salvaci&oacute;n y vida eterna que Cristo obtuvo para usted en la cruz. Las l&aacute;grimas y las disciplinas propias, no agregan nada a Su sacrificio sustitutorio completo y perfecto, realizado en la cruz por usted. Lo &uacute;nico que usted puede hacer para que la muerte de Cristo en la cruz sea significativa en su vida, es confesar sus pecados y aceptar Su sacrificio, como el pago total y final por todos sus pecados - pasados, presentes y futuros -. La Biblia, la santa e inspirada Palabra de Dios dice: &ldquo;Si confesamos nuestros pecados, &eacute;l es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad.&rdquo;</p>

<p>En el griego, el idioma original del Nuevo Testamento, la palabra confesar&rdquo; (homologeo) significa &ldquo;ponerse de acuerdo con&rdquo; o &ldquo;decir lo mismo que.&rdquo;</p>

<p>&iquest;Qu&eacute; es lo que hace al ponerse de acuerdo con Dios?</p>

<p><strong>Primero, </strong>usted reconoce que el pecado que ha cometido es malo. Dios es santo. Ning&uacute;n pecado puede entrar en su presencia, y sin embargo, aunque odia el pecado, Dios ama al pecador. &Eacute;l le ama sin importar lo que usted haga, pero odia el pecado. Cuando el Esp&iacute;ritu de Dios le dice en esa voz casi inaudible, &ldquo;me has contristado con tu conducta, y con tu actitud&rdquo;, usted sabe que lo que ha hecho es malo, y lo reconoce, o sea se pone de acuerdo con Dios, en que lo que hizo es malo.</p>

<p><strong>Segundo</strong>, de acuerdo con Hebreos cap&iacute;tulo 10, reconoce que todos sus pecados fueron pagados por Jes&uacute;s cuando &Eacute;l derram&oacute; su sangre en la cruz. Ahora, agradezca a Cristo por morir por sus pecados.</p>

<p><strong>Tercero</strong>, se arrepiente. El significado original de la palabra &ldquo;arrepentirse&rdquo; es literalmente &ldquo;cambiar de modo de pensar.&rdquo; Usted cambia de actitud hacia su pecado, lo cual, por supuesto, a trav&eacute;s del poder capacitador del Esp&iacute;ritu Santo, producir&aacute; un cambio en sus acciones. Voluntariamente deja de hacer lo que desagrada a Dios y comienza a hacer lo que a &Eacute;l le agrada.</p>

<p>&iexcl;Usted no puede vivir una vida santa y al mismo tiempo contristar al Esp&iacute;ritu Santo de Dios! No reconocer su pecado y justificarse por cuenta propia, s&oacute;lo provocar&aacute; la disciplina divina. Como Dios ama a Sus Hijos, El castiga, corrige y disciplina a los desobedientes.</p>

<p>El Rey David escribe, &ldquo;A &eacute;l clam&eacute; con mi boca...si en mi coraz&oacute;n hubiese yo mirado a la iniquidad, el Se&ntilde;or no me habr&iacute;a escuchado.&rdquo;</p>

<p>En el momento en que el Esp&iacute;ritu Santo de Dios se&ntilde;ale su pecado, confi&eacute;selo. Respire espiritualmente. Es decir, &ldquo;exhale&rdquo; confesando sus pecados. Cuando el Esp&iacute;ritu Santo le muestre un pecado que ha cometido o est&aacute; cometiendo, no demore en confesarlo. La confesi&oacute;n de los pecados es esencial para una vida santa y un testimonio entusiasta y fruct&iacute;fero para nuestro Se&ntilde;or.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h3>+ 3. Estar siempre lleno del Esp&iacute;ritu Santo</h3></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>Uno de mis amigos m&aacute;s queridos, un gran erudito cristiano, confes&oacute; ante un grupo de amigos creyentes, en uno de nuestros Institutos de Evangelizaci&oacute;n para Laicos, que &eacute;l no era un cristiano feliz y gozoso y que en muy raras ocasiones testificaba de Cristo. Posteriormente, le compart&iacute; algunas de las verdades sobre c&oacute;mo testificar en el poder del Esp&iacute;ritu. Dios toc&oacute; su vida. Esa noche regres&oacute; rebosando de alegr&iacute;a, despu&eacute;s de haber pasado la tarde compartiendo el Evangelio de Cristo. Apenas pod&iacute;a esperar para contarnos lo que Dios hab&iacute;a hecho en su vida. Nos cont&oacute; c&oacute;mo reci&eacute;n les hab&iacute;a hablado a dos j&oacute;venes estudiantes universitarios acerca de Cristo, y c&oacute;mo en el proceso Cristo se hab&iacute;a hecho m&aacute;s real para &eacute;l.</p>

<p>Tal vez usted ya dedica muchas horas a la oraci&oacute;n y al estudio de la Biblia, pero no siente gozo. No est&aacute; viviendo esa vida abundante que Jes&uacute;s prometi&oacute;.</p>

<p>Para ser fruct&iacute;fero el testificar de Cristo, debe apropiarse por fe de la llenura del Esp&iacute;ritu de Dios. Jes&uacute;s prometi&oacute;, &ldquo;pero recibir&eacute;is poder, cuando haya venido sobre vosotros el Esp&iacute;ritu Santo, y me ser&eacute;is testigos en Jerusal&eacute;n, en toda Judea, en Samaria, y hasta lo &uacute;ltimo de la tierra.&rdquo;</p>

<p>Ser lleno del Esp&iacute;ritu Santo involucra invitar al Esp&iacute;ritu Santo a que lo controle y dirija, permiti&eacute;ndole vivir una vida santa y consagrada y por fe hacerlo un testigo fruct&iacute;fero de &Eacute;l. Hay dos palabras y dos vers&iacute;culos que son fundamentales:</p>

<p>Primero, recuerde la palabra mandato. Efesios 5:18 dice: No os embriagu&eacute;is con vino, en lo cual hay disoluci&oacute;n; antes bien sed llenos del Esp&iacute;ritu Santo.</p>

<p>Esto significa ser controlado y dirigido por el Esp&iacute;ritu Santo como una manera nueva de vivir. Es un mandato para todos los creyentes, no s&oacute;lo para el pastor o el predicador, para el maestro de Escuela Dominical u otros l&iacute;deres cristianos, sino para todo aquel que cree en Jesucristo.</p>

<p>Ahora relacione el mandato de Dios con Su promesa, dada en 1 Juan 5:14,15</p>

<div class="quote-left">Y esta es la confianza que tenemos en &eacute;l, que si pedimos alguna cosa conforme a su voluntad, &eacute;l nos oye. Y si sabemos que &eacute;l nos oye en cualquier cosa que pidamos, sabemos que tenemos las peticiones que &laquo;le hayamos hecho.!</div>

<p>Bas&aacute;ndose en el mandato de Dios y en Su promesa, si usted est&aacute; dispuesto a rendir la direcci&oacute;n y el control de su vida a nuestro Se&ntilde;or Jesucristo, puede estar seguro de que &Eacute;l lo llenar&aacute; cuando por fe, como un acto de su voluntad, se apropie de la llenura de su Esp&iacute;ritu Santo.</p>

<p>No cometa el error de pensar que forzosamente debe tener una experiencia emocional dram&aacute;tica. En realidad, las emociones pueden ser muy peligrosas. Si usted derrama un gal&oacute;n de gasolina en tierra y le aplica un cerillo o f&oacute;sforo encendido, se producir&aacute;n fuertes llamas y mucho humo, pero todo acabar&aacute; pronto. Esto es fascinante y dram&aacute;tico, pero en realidad, un desperdicio.</p>

<p>Muchas personas est&aacute;n tan envueltas en sus sentimientos y en la b&uacute;squeda de experiencias emocionales que en realidad ofenden a Dios. La Biblia dice, &ldquo;El justo por la fe vivir&aacute;&rdquo;, y &ldquo;todo lo que no proviene de fe es pecado.&rdquo; El s&oacute;lo acto de buscar una experiencia emocional rechaza el concepto de fe.</p>

<p>Muchas veces, desde el p&uacute;lpito o mientras hablo con otras personas, no siento ninguna oleada de poder espiritual ni fuerte emoci&oacute;n. Algunas veces, debido a los muchos viajes, conferencias y la falta de descanso apropiado, mi cuerpo est&aacute; agotado y mi mente est&aacute; embotada por la fatiga. Sin embargo, (si no hay pecado sin confesar en mi vida, y si por fe reclamo la plenitud del Esp&iacute;ritu Santo), s&eacute; que estoy lleno del Esp&iacute;ritu aunque no lo sienta as&iacute;. No dependo de los sentimientos. Dependo de la Palabra de Dios, de Su mandato y Su promesa.</p>

<p>De igual manera, por fe, usted puede saber que est&aacute; lleno del Esp&iacute;ritu constante y continuamente por el resto de su vida, conforme siga &ldquo;respirando espiritualmente&rdquo;, exhalando cuando confiesa sus pecados e inhalando cuando se apropia del poder de Dios por fe.</p>

<p>Ser lleno del Esp&iacute;ritu Santo lo prepara para servir como un testigo de Jesucristo.</p>

<p>Siempre les decimos a nuestros coordinadores, que ahora est&aacute;n sirviendo en 193 de los pa&iacute;ses m&aacute;s importantes del mundo, representando 97% de la poblaci&oacute;n mundial,&ldquo;No vayan a realizar sus tareas a menos que sepan, sin lugar a dudas, que est&aacute;n llenos del Esp&iacute;ritu Santo.&rdquo; S&oacute;lo el servicio realizado para Cristo en el poder del Esp&iacute;ritu Santo agrada a Dios. El servicio realizado para El en el poder de la carne, es tiempo perdidoy deshonra su nombre, produciendo madera, heno y hojarasca espiritual (1 Corintios 3:12) lo que, en el D&iacute;a del Juicio ser&aacute;n quemados.</p>

<p>Si en este momento usted sabe que no est&aacute; lleno del Esp&iacute;ritu Santo y verdaderamente desea ser un hombre o una mujer de Dios, puede hacer esta oraci&oacute;n ahora mismo:</p>

<div class="quote-right">Se&ntilde;or Jes&uacute;s, verdaderamente quiero ser una persona consagrada. Me arrepiento de mis caminos pecaminosos. Te entrego el control de mi vida. Renuncio a todo. Quiero que T&uacute; seas mi Maestro y mi Se&ntilde;or. Ahora, basado en la autoridad de T&uacute; mandato de ser lleno y de Tu promesa de que si pedimos algo de acuerdo a Tu voluntad, oir&aacute;s y responder&aacute;s, por fe, recibo la llenura del Esp&iacute;ritu Santo.</div>

<p>Si hizo esta oraci&oacute;n con fe, puede estar seguro, basado en el mandato y en la autoridad de Su promesa, &iexcl;que ya est&aacute; lleno del Esp&iacute;ritu Santo! Puede saber esto por fe, con o sin emociones, simplemente confiando en Dios y Su Palabra.</p>

<p>Sin embargo, de acuerdo a la promesa de Jes&uacute;s, &ldquo;El que tiene mis mandamientos y los guarda, &eacute;se es el que me ama, y el que me ama, ser&aacute; amado por mi Padre, y yo le amar&eacute;, y me manifestar&eacute; a &eacute;l.&rdquo; Como Jes&uacute;s prometi&oacute; manifestarse a todos los que le obedecen, hay emociones v&aacute;lidas que surgen como un resultado de una vida de fe y al hablar de Cristo con otros en el poder del Esp&iacute;ritu Santo</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h3>+ 4. Est&eacute; preparado para comunicar su fe en Cristo</h3></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->
<p>La preparaci&oacute;n m&aacute;s efectiva para comunicar su fe, es mantener a Cristo en el trono de su vida, como el Se&ntilde;or de su coraz&oacute;n. En I Pedro 3:15,16 se nos dice:</p>

<div class="quote-left">Y Santificad a Dios el Se&ntilde;or en vuestros corazones, y estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande raz&oacute;n de la esperanza que hay en vosotros; teniendo buena conciencia, para que en lo que murmuran de vosotros como de malhechores, sean avergonzados los que calumnian vuestra buena conducta en Cristo.</div>

<p>Como cualquier otra destreza, la habilidad de dar raz&oacute;n de la esperanza que se tiene en Cristo - o &ldquo;testificar&rdquo; - se puede hacer mejor con capacitaci&oacute;n y pr&aacute;ctica.</p>

<p>Perm&iacute;tame ilustrar este concepto. Un pastor cristiano me dijo que hab&iacute;a servido en la obra cristiana por m&aacute;s de veinticinco a&ntilde;os, pero que nunca hab&iacute;a llevado a nadie a Cristo, sino hasta despu&eacute;s de haber participado en uno de nuestros seminarios de capacitaci&oacute;n. &Eacute;l me dijo, &ldquo;Su mensaje sobre c&oacute;mo testificar en el Esp&iacute;ritu y la comprensi&oacute;n de c&oacute;mo presentar el Evangelio por medio del uso de las Cuatro Leyes Espirituales cambi&oacute; mi vida. Nunca hab&iacute;a sido tan feliz. Ahora, empiezo a conocer algo de la vida abundante que Jes&uacute;s prometi&oacute;.&rdquo;</p>

<p>Este l&iacute;der cristiano se ve&iacute;a radiante, con un nuevo gozo, mientras compart&iacute;a c&oacute;mo hab&iacute;a presentado a nuestro Salvador, por primera vez en su vida, no a una, sino a dos personas.</p>

<p>Durante esa misma semana de capacitaci&oacute;n, cientos de estudiantes y algunos laicos que tambi&eacute;n asistieron, fueron usados por Dios para orar personalmente con m&aacute;s de novecientas personas que recibieron a Cristo como resultado de sus testimonios. La capacitaci&oacute;n fue lo que hizo la diferencia.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc5-1.png" style="width:100%" /></p>

<p>Yo doy gracias a Dios por la forma en que &Eacute;l est&aacute; usando los seminarios teol&oacute;gicos, las escuelas b&iacute;blicas y otras instituciones similares de ense&ntilde;anza cristiana, pero usted no necesita dedicar largos a&ntilde;os de estudio para que Dios comience a usarlo.</p>

<p>No todos tienen el don del evangelismo, pero cada creyente est&aacute; llamado a hacer &ldquo;obra de evangelista.&rdquo;</p>

<p>Usted tiene el privilegio y la responsabilidad de ser testigo de su maravilloso Se&ntilde;or Jes&uacute;s. La Gran Comisi&oacute;n de Cristo registrada en San Mateo 28:18-20 es tambi&eacute;n para usted.</p>

<p>Al aprender c&oacute;mo usar una herramienta tan sencilla como las Cuatro Leyes Espirituales en el poder del Esp&iacute;ritu Santo, usted tambi&eacute;n puede experimentar gran efectividad al testificar.</p>

<p>Algunos cristianos tendr&aacute;n m&aacute;s fruto que otros. No se desanime si se da cuenta que algunos de sus amigos est&aacute;n llevando m&aacute;s personas a Cristo que usted. Descanse al saber que los que vienen a Cristo a trav&eacute;s del testimonio de un cristiano, lo hacen como resultado del ministerio del Esp&iacute;ritu Santo, quien nos capacita para llevar fruto. Recuerde que el &eacute;xito al testificar depende sencillamente de tomar la iniciativa de presentar a Cristo en el poder del Esp&iacute;ritu Santo, dej&aacute;ndole los resultados a Dios.</p>

<p>Personalmente estoy convencido de que si usted entrega diez folletos de las Cuatro Leyes Espirituales a igual n&uacute;mero de no creyentes diariamente, por lo menos entre uno y cinco recibir&aacute;n a Cristo, dependiendo de cada pa&iacute;s y cultura.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ TOMANDO LA INICIATIVA</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->
<p>La preparaci&oacute;n personal, el estar seguro de que usted es cristiano, el confesar sus pecados, el ser lleno del Esp&iacute;ritu Santo y el estar preparado para comunicar su fe en Cristo, son la primera parte del proceso para que usted llegue a ser un testigo fruct&iacute;fero. La segunda es tomar la iniciativa. Tomar la iniciativa requiere de cuatro pasos. Observ&eacute;moslo brevemente:</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h3>+ 1. Ore</h3></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->
<p>De acuerdo a la santa Palabra de Dios, si pide algo conforme a Su voluntad, &Eacute;l oye y le responde. &iquest;Quiere que sus seres amados, que sus amigos y vecinos vengan a Cristo? Entonces, comience a reclamarlos para Dios en oraci&oacute;n.</p>

<p>Siga el ejemplo de nuestro Se&ntilde;or, cuya oraci&oacute;n intercesora est&aacute; registrada en San Juan 17: &ldquo;Yo ruego por ellos; no ruego por el mundo, sino por los que me diste...&rdquo;</p>

<p>El ap&oacute;stol Pablo y los otros escritores del Nuevo Testamento frecuentemente ped&iacute;an oraci&oacute;n por otros, as&iacute; como por ellos mismos.</p>

<p>Yo he orado por seres queridos, he derramado l&aacute;grimas mientras imploraba que vengan a Cristo. Un d&iacute;a me di cuenta que Dios no iba a dejar que ellos se perdieran, pues &Eacute;l los amaba m&aacute;s que yo. Entonces comenc&eacute; a agradecer a Dios en fe, porque pronto ellos llegar&iacute;an a ser cristianos. La mayor&iacute;a ya han recibido a Cristo, pero muchos nombres m&aacute;s se est&aacute;n agregando a mi lista de oraci&oacute;n.</p>

<p>As&iacute; como Jes&uacute;s or&oacute; para que el Esp&iacute;ritu Santo hiciera Su obra en las vidas de Sus disc&iacute;pulos, usted tambi&eacute;n puede orar para que el Esp&iacute;ritu Santo convenza de pecado a los no-creyentes y haga nacer en ellos un fuerte deseo de conocer los caminos de Dios. La Biblia nos promete:</p>

<div class="quote-left">El Se&ntilde;or no retarda su promesa, seg&uacute;n algunos la tienen por tardanza, sino que es paciente para con nosotros, no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento.</div>

<p>Sin embargo, en Su tiempo misterioso y soberano, &Eacute;l escoge a veces esperar a que un creyente preocupado haga oraci&oacute;n, para enviar al Esp&iacute;ritu Santo al coraz&oacute;n de esa persona. Como alguien dijo, &ldquo;La oraci&oacute;n no es vencer la renuencia de Dios, sino asirse de Su buena voluntad.&rdquo;</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc5-2.png" style="float:right; width:30%" />A pesar de que Dios no est&aacute; dispuesto a que &ldquo;ninguno se pierda sino que todos procedan al arrepentimiento.&rdquo; Su programa no es siempre el mismo que el nuestro. Continu&eacute; confiando y agradeciendo a Dios por la salvaci&oacute;n y crecimiento espiritual de aqu&eacute;llos por quienes &Eacute;l lo ha movido a orar. De acuerdo a mi experiencia personal y al estudio de la Palabra de Dios, puedo asegurarle que la oraci&oacute;n es el punto de partida para traer a un ser querido a Cristo.</p>

<p>Haga una lista de oraci&oacute;n o lleve un diario de oraci&oacute;n y ore por nombre espec&iacute;ficamente por los no-cristianos, por los cristianos, y por eventos espec&iacute;ficos. Cuando Dios responda a su oraci&oacute;n, anote la fecha y describa c&oacute;mo Dios respondi&oacute; sus oraciones. En poco tiempo usted tendr&aacute; un registro de la fidelidad de Dios que lo animar&aacute; y fortalecer&aacute; mucho en su fe y tambi&eacute;n animar&aacute; a otros.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary8" class="summary"><h3>+ 2. Ir</h3></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->
<p>Una de las mayores barreras al testificar es el asunto de ir. Usted va a escuchar toda clase de excusas: &ldquo;Estoy demasiado ocupado&rdquo;, o &ldquo;Estoy esperando que el Esp&iacute;ritu Santo me gu&iacute;e a alguien en particular.&rdquo; No espere que el Esp&iacute;ritu Santo &ldquo;le gu&iacute;e.&rdquo;</p>

<p>Nuestro Se&ntilde;or Jesucristo ya le ha ordenado ir y comunicar las Buenas Nuevas a todos los que escuchen. No espere que vengan a usted. Conforme siga a Jes&uacute;s, &Eacute;l lo guiar&aacute; a las personas a quienes &Eacute;l ya ha preparado.</p>

<p>Recuerde, lo m&aacute;s importante y maravilloso que le ha ocurrido es conocer a Cristo, y lo mejor que usted puede hacer por otra persona, es ayudarle a conocer a Cristo. Si eso es verdad, deber&iacute;a comenzar a reorganizar sus prioridades. &iquest;C&oacute;mo est&aacute; invirtiendo su tiempo? &iquest;Est&aacute; dedicando tiempo cada d&iacute;a para hablarle de Cristo a alguien m&aacute;s?</p>

<p>Quiz&aacute; le anime saber que muchos de los coordinadores de la Cruzada Estudiantil y Profesional para Cristo, como en mi caso, son t&iacute;midos por naturaleza. Para nosotros no siempre es f&aacute;cil hablar a otros de Cristo, pero como Jes&uacute;s vino a buscar y a salvar a los perdidos y &Eacute;l vive en nosotros, sencillamente le pedimos que nos d&eacute; el valor para hablar de &Eacute;l poderosamente.</p>

<p>Cuando estoy a solas con alguna persona por algunos minutos, reconozco que estoy en ese lugar para atender una cita que Dios ha concertado y compartir las Buenas Nuevas del amor y perd&oacute;n de Dios.</p>

<p>En una ocasi&oacute;n, me detuve en la ciudad de Atlanta, en un centro comercial para comprar una corbata. El gerente de la tienda me ofreci&oacute; su ayuda, y mientras escog&iacute;a una corbata que combinara con el saco que usaba, le coment&eacute; que visitaba esa ciudad para reunirme con algunos l&iacute;deres cristianos para hablar de c&oacute;mo lograr que nuestra naci&oacute;n se vuelva a Cristo. Entonces le pregunt&eacute;, &ldquo;&iquest;Es usted cristiano?&rdquo;</p>

<p>Me contest&oacute; que no, pero que hab&iacute;a considerado esa posibilidad. Le mostr&eacute; el folleto de las Cuatro Leyes Espirituales. Al leer el folleto llegu&eacute; a la &ldquo;Cuarta Ley&rdquo; que explica c&oacute;mo recibir a Cristo y finaliza con esta oraci&oacute;n:</p>

<p>&ldquo;Se&ntilde;or Jesucristo, gracias porque me amas y entiendo que te necesito. Te abro la puerta de mi vida y te recibo como mi Se&ntilde;or y Salvador. Ocupa el trono de mi vida. Hazme la persona que t&uacute; quieres que yo sea. Gracias por perdonar mis pecados y por darme vida eterna. Toma el control del trono de mi vida. Gracias por haber entrado en mi vida y por escuchar mi oraci&oacute;n seg&uacute;n tu promesa.&rdquo;</p>

<p>Le pregunt&eacute;, &ldquo;&iquest;Expresa esta oraci&oacute;n el deseo de su coraz&oacute;n?&rdquo;</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc5-3.png" style="float:left; width:50%" />&Eacute;l me asegur&oacute; que s&iacute;, entonces le suger&iacute; que orara en voz alta, lo cual hizo. Tan pronto como termin&oacute;, yo or&eacute; por &eacute;l. Luego le pregunt&eacute; si sab&iacute;a d&oacute;nde estaba Cristo ahora en relaci&oacute;n a &eacute;l. Me asegur&oacute; que Cristo estaba ahora en su vida. Proced&iacute; a explicarle que de acuerdo a la Palabra de Dios, no s&oacute;lo pod&iacute;a tener seguridad de la vida eterna, sino que tambi&eacute;n pod&iacute;a crecer como cristiano.</p>

<p>Como es mi costumbre, le ped&iacute; su direcci&oacute;n para enviarle material de edificaci&oacute;n. En aviones, restaurantes, y aun en ascensores, encuentro personas que est&aacute;n ansiosas de recibir a Cristo.</p>

<p>Dondequiera que voy, ya sea en los Estados Unidos o en otros pa&iacute;ses, en aviones, en restaurantes, en ascensores, en salas de lectura, en universidades, o entre profesionales, encuentro personas que est&aacute;n deseosas de recibir a Cristo.</p>

<p>El hablar de Cristo con otros deber&iacute;a convertirse en un estilo de vida para todo cristiano. Cuando usted se levante por la ma&ntilde;ana, agrad&eacute;zcale al Se&ntilde;or por vivir en usted y p&iacute;dale que use sus labios para hablar de Su amor y perd&oacute;n en toda oportunidad que se le presente durante ese d&iacute;a.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary9" class="summary"><h3>+ 3. Hable de Jesucristo</h3></div>
<div class="collapsed" id ="Text9">
<!-- end default revealSummary -->
<p>El ap&oacute;stol Pablo dijo: &ldquo;Amonestando a todo hombre, y ense&ntilde;ando a todo hombre en toda sabidur&iacute;a.&rdquo; No hable solamente acerca de asuntos circunstanciales, tales como el clima, los deportes, el gobierno y los negocios. Ore y espere que Dios le permita introducir a su Hijo en la conversaci&oacute;n</p>

<p>Una joven viuda de unos treinta a&ntilde;os de edad, hab&iacute;a conducido a Cristo a decenas de parientes, amigos y vecinos. Casi todos los domingos tra&iacute;a a alguien nuevo a la iglesia. Muchas de estas personas acababan de recibir a Cristo con ella la semana anterior.</p>

<p>Una vez le preguntaron, &ldquo;&iquest;C&oacute;mo puede compartir su fe con tantas personas?&rdquo;</p>

<div class="block-quote">Si espera que Dios lo use, hable sobre su Salvador - y siempre anime a aquellos con quienes comparte, a invitarlo a entrar en sus vidas. En realidad, usted no ha &ldquo;evangelizado&rdquo; hasta que le da a las personas una oportunidad de responder al Evangelio, invitando a Cristo a ser su Salvador y Se&ntilde;or.</div>

<p>Ella respondi&oacute;: &ldquo;Me pregunto, &iquest;si no les hablo de Jesucristo, qui&eacute;n lo har&aacute;? Y no he encontrado una buena respuesta para esa pregunta.&rdquo;</p>

<p>Hoy d&iacute;a un n&uacute;mero cada vez mayor de creyentes es usado constantemente por Dios para presentar a nuestro Salvador a otros, porque est&aacute;n capacitados para hablar de Cristo en el poder del Esp&iacute;ritu Santo. Ellos no se desv&iacute;an para comentar asuntos sin importancia. Esa es la raz&oacute;n por la cual el folleto de las Cuatro Leyes Espirituales es tan efectivo, mantiene la conversaci&oacute;n centrada en la persona de Jesucristo, sin distraerse en asuntos que desv&iacute;an la atenci&oacute;n del Se&ntilde;or. Este folleto hace que su presentaci&oacute;n del Evangelio sea sencilla y comprensible.</p>

<p>Muchas personas demuestran oposici&oacute;n a Dios y la iglesia - no quieren nada que tenga que ver con la religi&oacute;n, pero cuando se les habla de Jes&uacute;s, ellos responden positivamente.</p>

<p>Recuerdo a un taxista en Australia que me dijo: &ldquo;Renunci&eacute; a todo tipo de religi&oacute;n en la Segunda Guerra Mundial. No quiero tener nada que ver con un Dios que permite que las personas se maten unas a otras.&rdquo;</p>

<p>&ldquo;Espere un minuto&rdquo;, le dije.&rdquo; Est&aacute; acusando a Dios por algo de lo que el hombre es responsable. Es el mal que est&aacute; en el hombre, su pecado, el que lo impulsa a odiar, robar y matar.&rdquo;</p>

<p>Yo le expliqu&eacute; la diferencia entre religi&oacute;n, que es la b&uacute;squeda que el hombre hace de Dios, y el cristianismo, que es la revelaci&oacute;n que Dios hace al hombre de s&iacute; mismo en Cristo. Conforme le hablaba sobre la persona de Cristo, la actitud de este hombre cambi&oacute;. Enseguida dijo que le gustar&iacute;a orar conmigo y recibir a Cristo.</p>

<p>Hoy en d&iacute;a muchas personas se oponen a la iglesia organizada en general, es por eso que si va a alcanzarlos para el Salvador, primero debe hablarles de &Eacute;l, no de la iglesia. Despu&eacute;s que reciban a Cristo, la mayor&iacute;a querr&aacute; participar activamente en la iglesia.</p>

<p>Otros se oponen tenazmente a la Palabra de Dios. Usted no tiene que comprobarles la Biblia, s&oacute;lo &uacute;sela. Usela aun con las personas que dicen que no creen en ella. Dios ha prometido honrar Su Palabra.</p>

<p>Si espera que Dios lo use, hable sobre su Salvador - y siempre anime a aquellos con quienes comparte, a invitarlo a entrar en sus vidas. En realidad, usted no ha &ldquo;evangelizado&rdquo; hasta que le da a las personas una oportunidad de responder al Evangelio, invitando a Cristo a ser su Salvador y Se&ntilde;or.</p>

<p>Conforme hable a las personas del Salvador, descubrir&aacute; que muchos est&aacute;n listos para recibirlo, aun en la primera oportunidad que hable con ellos, aunque algunos quiz&aacute;s necesiten &ldquo;madurar&rdquo; un poco m&aacute;s.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tcc5-4.png" style="float:right; width:50%" />Cuando yo era ni&ntilde;o sol&iacute;a visitar el huerto de mi t&iacute;o. Siempre recog&iacute;amos los duraznos maduros, pero dej&aacute;bamos los verdes. Dos d&iacute;as despu&eacute;s, regres&aacute;bamos a los mismos &aacute;rboles a recoger m&aacute;s fruta madura. As&iacute; repet&iacute;amos el procedimiento cada dos d&iacute;as. Lo mismo sucede en nuestro testificar de Cristo. En oraci&oacute;n pida ser m&aacute;s sensible a las personas y a su predisposici&oacute;n al Evangelio. Algunos, como la fruta madura para la cosecha, estar&aacute;n listos para recibir a Cristo; otros, como la fruta verde, todav&iacute;a no.</p>

<p>No discuta con los que no est&aacute;n listos. No los intimide, no los insulte; no intente presionarlos para que &ldquo;tomen una decisi&oacute;n por Cristo.&rdquo; D&eacute;les algo apropiado para leer (como las Cuatro Leyes Espirituales), d&eacute;jelos con una oraci&oacute;n, h&aacute;bleles despu&eacute;s, cuando el Se&ntilde;or le d&eacute; la oportunidad, pero contin&uacute;e buscando el fruto maduro. Estos est&aacute;n alrededor suyo. Miles, millones de personas cuyos corazones ya han sido preparados por el Esp&iacute;ritu Santo est&aacute;n esperando recibir a Cristo.</p>

<p>Por ejemplo, en un avi&oacute;n le habl&eacute; a dos personas que estaban &ldquo;espiritualmente maduras.&rdquo; Una era una mujer de ochenta a&ntilde;os quien recibi&oacute; a Cristo como su Salvador. La otra, el presidente de una gran corporaci&oacute;n, hab&iacute;a cre&iacute;do siempre que Jesucristo era el Hijo de Dios y que hab&iacute;a muerto por sus pecados, pero hab&iacute;a estado tan ocupado con tantas otras cosas que no hab&iacute;a podido hacer un compromiso con Cristo personalmente.</p>

<p>Durante el mismo viaje, en la Universidad de Cornell, donde me dirig&iacute; a estudiantes y profesores, el presidente de una gran empresa se me aproxim&oacute;. Este hombre estaba visitando a su hijo que era un nuevo cristiano de apenas seis meses.</p>

<p>&ldquo;Yo quiero agradecerle por ayudarle a mi hijo espiritualmente&rdquo;, me dijo.</p>

<p>Le pregunt&eacute; si &eacute;l ya hab&iacute;a recibido a Cristo, me respondi&oacute; que no lo hab&iacute;a hecho, pero que quer&iacute;a hacerlo. Inclinamos nuestras cabezas para orar y, para el gran gozo de nuestro Se&ntilde;or, &eacute;l tambi&eacute;n entreg&oacute; su vida a nuestro Salvador.</p>

<p>Tome la iniciativa orando, acerc&aacute;ndose a otros, hablando de Jes&uacute;s, y finalmente, esperando que Dios lo use.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary10" class="summary"><h3>+ 4. Espere que Dios lo use</h3></div>
<div class="collapsed" id ="Text10">
<!-- end default revealSummary -->
<p>Cuando usted hable acerca de Jesucristo, espere que hombres y mujeres respondan- no en base en un pensamiento positivo, sino en base en la fidelidad de Dios, a Su amor, a Su soberan&iacute;a, Su poder y Su promesa de que &Eacute;l no quiere que ninguno perezca, sino que todos procedan al arrepentimiento.</p>

<p>El Se&ntilde;or Jesucristo prometi&oacute; Sus recursos sobrenaturales para todos los que se unen con &Eacute;l para ayudar a cumplir la Gran Comisi&oacute;n. El le dijo a sus disc&iacute;pulos:</p>

<div class="quote-left">Toda potestad me es dada en el cielo y en la tierra. Por lo tanto, id, y haced disc&iacute;pulos a todas las naciones, bautiz&aacute;ndolos en el nombre del Padre, y del Hijo, y del Esp&iacute;ritu Santo; ense&ntilde;&aacute;ndoles que guarden todas las cosas que os he mandado; y he aqu&iacute; yo estoy &laquo; con vosotros todos los d&iacute;as hasta el fin del mundo.</div>

<p>Usted tiene garantizado ese mismo poder de la resurrecci&oacute;n y Su presencia en el d&iacute;a de hoy. Nuestro Se&ntilde;or se ha comprometido a honrar el testimonio fiel de todos los que ponen su confianza en &Eacute;l.</p>

<p>Es interesante notar que mientras los disc&iacute;pulos con frecuencia enfrentaban oposici&oacute;n fuerte y dif&iacute;cil, el movimiento cristiano experimentaba un crecimiento sin precedentes, conforme fue expresado en las cartas de Pablo a las iglesias en Tesal&oacute;nica y Colosas:</p>

<div class="quote-right">Como saben, nunca hemos recurrido a las adulaciones ni a las excusas para obtener dinero; Dios es testigo. Tampoco hemos buscado honores de nadie; ni de ustedes ni de otros.&rdquo;<br />
1 Tesalonicenses 2:5,6</div>

<div class="quote-left">&ldquo;Que ha llegado hasta ustedes. Este evangelio est&aacute; dando fruto y creciendo en todo el mundo, como tambi&eacute;n ha sucedido entre ustedes desde el d&iacute;a en que supieron de la gracia de Dios y la comprendieron plenamente.&rdquo; Colosenses 1:6</div>

<p>Una de las mentiras m&aacute;s grandes de todos los siglos, es la actitud que prevalece entre los cristianos que afirman que las personas no quieren conocer a Dios personalmente. Por este motivo, muchos cristianos se acercan a otros con una actitud negativa, como dici&eacute;ndole: &ldquo;Usted no quiere ser cristiano, &iquest;verdad?&rdquo; Con su actitud negativa, inhiben a todos de expresar su necesidad de Cristo. Perm&iacute;tame animarlo a confiar en que Dios ya ha preparado los corazones de los que est&aacute;n ansiosos de recibir a Cristo, y usted descubrir&aacute; que &Eacute;l realmente lo ha hecho.</p>

<p>Despu&eacute;s de m&aacute;s de cuarenta y cinco a&ntilde;os de compartir a Cristo con millones de estudiantes y laicos, individualmente y en grupos grandes y peque&ntilde;os, puedo decirle que el Esp&iacute;ritu Santo ha creado un hambre por Dios en los corazones de las multitudes alrededor del mundo. Millones est&aacute;n esperando que alguien les hable de nuestro maravilloso Salvador, y est&aacute;n listos para recibirlo.</p>

<p>Por ejemplo, en una de nuestras conferencias para pastores en Hait&iacute;, se dedicaron un total aproximado de cuatro horas a la evangelizaci&oacute;n. Unos 550 predicadores, pastores y laicos oraron con m&aacute;s de mil personas que recibieron a Cristo en peque&ntilde;os grupos de dos y tres.</p>

<p>En Daytona Beach, durante unas vacaciones de Semana Santa, aproximadamente mil quinientos coordinadores de la Cruzada Estudiantil y Profesional para Cristo y estudiantes universitarios, presentaron a Cristo a m&aacute;s de tres mil quinientos estudiantes universitarios por medio de su testimonio personal.</p>

<p>En el sur de California, un n&uacute;mero similar de estudiantes presentaron a Cristo aproximadamente a dos mil estudiantes universitarios en un d&iacute;a de evangelizaci&oacute;n en la playa.</p>

<p>La mayor&iacute;a de nuestros coordinadores, laicos y estudiantes voluntarios, informan que entre 10% y 75% de las personas a quienes le hacen una presentaci&oacute;n clara del Evangelio reciben a Cristo. El porcentaje de respuestas, a menudo var&iacute;a seg&uacute;n el pa&iacute;s y la cultura. Sin embargo, encontramos que el Esp&iacute;ritu de Dios ha preparado los corazones de multitudes de hombres y mujeres para responder a Cristo. Como Jes&uacute;s dijo: &ldquo;Mirad los campos, que ya est&aacute;n blancos para la siega.&rdquo; No todos a quienes les hable de Cristo lo recibir&aacute;n, pero Dios lo usar&aacute; para sembrar y cosechar en su reino conforme usted conf&iacute;a en El.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary11" class="summary"><h2>+ EL &Eacute;XITO AL TESTIFICAR DE CRISTO</h2></div>
<div class="collapsed" id ="Text11">
<!-- end default revealSummary -->
<p>Espere resultados cuando testifique de Cristo, pero recuerde, no importa c&oacute;mo Dios decida usar su fidelidad al testificar, su responsabilidad es presentar a Cristo. Es responsabilidad de Dios traerlas a &Eacute;l mismo. Como dije anteriormente, el &eacute;xito al testificar es tomar la iniciativa de presentar a Cristo en el poder del Esp&iacute;ritu Santo, dej&aacute;ndole los resultados a Dios.</p>

<p>En estas p&aacute;ginas he presentado un plan b&iacute;blico que le permitir&aacute; tener &eacute;xito en alcanzar a otros para Cristo. Primero, debe comenzar con su preparaci&oacute;n personal:</p>

<ol>
	<li>Est&eacute; seguro de que usted mismo es cristiano</li>
	<li>Est&eacute; seguro de no tener pecado inconfeso en su vida</li>
	<li>Sea lleno del Esp&iacute;ritu Santo</li>
	<li>Est&eacute; preparado para comunicar su fe en Cristo</li>
</ol>

<p>Luego, tome la iniciativa al:</p>

<ol>
	<li>Orar</li>
	<li>Ir a buscar a otros</li>
	<li>Hablar de Jesucristo</li>
	<li>Esperar que Dios que Dios lo use</li>
</ol>

<p>El seguir este plan con seriedad le permitir&aacute; ser un testigo fruct&iacute;fero para Dios como un estilo de vida. Ninguna otra experiencia en este mundo puede compararse con testificar de Jesucristo en el poder del Esp&iacute;ritu Santo. &iquest;Se unir&aacute; conmigo en esta gran aventura?</p>

</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', '¿CÓMO  PUEDE  USTED SER  UN TESTIGO  FRUCTÍFERO?: ', '/content/M2/spa/tc/tc05.html')">
				<img class="social" src="@/assets/sites/mc2/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
<!-- end sdcard languageFooterSingle -->

</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->