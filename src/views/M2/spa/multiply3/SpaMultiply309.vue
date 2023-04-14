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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>El Ministerio Exitoso trae Persecución</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Alabar</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p class="back"><em>Lee un pasaje de las Escrituras y practiquen un canto de adoraci&oacute;n.</em></p>

<ul>
	<li>(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar a las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y aliento.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li>Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li>Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li>record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p>Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 5:12-42</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 5:12-42</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Los ap&oacute;stoles sanan a muchas personas</h3>

<p><sup class="versenum">12&nbsp;</sup>Por medio de los ap&oacute;stoles ocurr&iacute;an muchas se&ntilde;ales y prodigios entre el pueblo; y todos los creyentes se reun&iacute;an de com&uacute;n acuerdo en el P&oacute;rtico de Salom&oacute;n.<sup class="versenum">13&nbsp;</sup>Nadie entre el pueblo se atrev&iacute;a a juntarse con ellos, aunque los elogiaban.<sup class="versenum">14&nbsp;</sup>Y segu&iacute;a aumentando el n&uacute;mero de los que confiaban en el Se&ntilde;or.<sup class="versenum">15&nbsp;</sup>Era tal la multitud de hombres y mujeres que hasta sacaban a los enfermos a las plazas y los pon&iacute;an en camillas para que, al pasar Pedro, por lo menos su sombra cayera sobre alguno de ellos.<sup class="versenum">16&nbsp;</sup>Tambi&eacute;n de los pueblos vecinos a Jerusal&eacute;n acud&iacute;an multitudes que llevaban personas enfermas y atormentadas por esp&iacute;ritus malignos, y todas eran sanadas.</p>

<h3>Persiguen a los ap&oacute;stoles</h3>

<p><sup class="versenum">17&nbsp;</sup>El sumo sacerdote y todos sus partidarios, que pertenec&iacute;an a la secta de los saduceos, se llenaron de envidia.<sup class="versenum">18&nbsp;</sup>Entonces arrestaron a los ap&oacute;stoles y los metieron en la c&aacute;rcel com&uacute;n.<sup class="versenum">19&nbsp;</sup>Pero en la noche un &aacute;ngel del Se&ntilde;or abri&oacute; las puertas de la c&aacute;rcel y los sac&oacute;.<sup class="versenum">20&nbsp;</sup>&laquo;Vayan &mdash;les dijo&mdash;, pres&eacute;ntense en el templo y comuniquen al pueblo todo este mensaje de vida&raquo;.</p>

<p><sup class="versenum">21&nbsp;</sup>Conforme a lo que hab&iacute;an o&iacute;do, al amanecer entraron en el templo y se pusieron a ense&ntilde;ar. Cuando llegaron el sumo sacerdote y sus partidarios, convocaron al Consejo, es decir, a la asamblea general de los ancianos de Israel, y mandaron traer de la c&aacute;rcel a los ap&oacute;stoles.<sup class="versenum">22&nbsp;</sup>Pero, al llegar los guardias a la c&aacute;rcel, no los encontraron. As&iacute; que volvieron con el siguiente informe:<sup class="versenum">23&nbsp;</sup>&laquo;Encontramos la c&aacute;rcel cerrada, con todas las medidas de seguridad, y a los guardias firmes a las puertas; pero, cuando abrimos, no encontramos a nadie adentro&raquo;.</p>

<p><sup class="versenum">24&nbsp;</sup>Al o&iacute;rlo, el capit&aacute;n de la guardia del templo y los jefes de los sacerdotes se quedaron perplejos, pregunt&aacute;ndose en qu&eacute; terminar&iacute;a todo aquello.<sup class="versenum">25&nbsp;</sup>En esto, se present&oacute; alguien que les inform&oacute;: &laquo;&iexcl;Miren! Los hombres que ustedes metieron en la c&aacute;rcel est&aacute;n en el templo y siguen ense&ntilde;ando al pueblo&raquo;.<sup class="versenum">26&nbsp;</sup>Fue entonces el capit&aacute;n con sus guardias y trajo a los ap&oacute;stoles sin recurrir a la fuerza, porque tem&iacute;an ser apedreados por la gente.<sup class="versenum">27&nbsp;</sup>Los condujeron ante el Consejo, y el sumo sacerdote les reclam&oacute;:</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;Terminantemente les hemos prohibido ense&ntilde;ar en ese nombre. Sin embargo, ustedes han llenado a Jerusal&eacute;n con sus ense&ntilde;anzas, y se han propuesto echarnos la culpa a nosotros de la muerte de ese hombre.</p>

<p><sup class="versenum">29&nbsp;</sup>&mdash;&iexcl;Es necesario obedecer a Dios antes que a los hombres! &mdash;respondieron Pedro y los dem&aacute;s ap&oacute;stoles&mdash;.<sup class="versenum">30&nbsp;</sup>El Dios de nuestros antepasados resucit&oacute; a Jes&uacute;s, a quien ustedes mataron colg&aacute;ndolo de un madero.<sup class="versenum">31&nbsp;</sup>Por su poder, Dios lo exalt&oacute; como Pr&iacute;ncipe y Salvador, para que diera a Israel arrepentimiento y perd&oacute;n de pecados.<sup class="versenum">32&nbsp;</sup>Nosotros somos testigos de estos acontecimientos, y tambi&eacute;n lo es el Esp&iacute;ritu Santo que Dios ha dado a quienes le obedecen.</p>

<p><sup class="versenum">33&nbsp;</sup>A los que oyeron esto se les subi&oacute; la sangre a la cabeza y quer&iacute;an matarlos.<sup class="versenum">34&nbsp;</sup>Pero un fariseo llamado Gamaliel, maestro de la ley muy respetado por todo el pueblo, se puso de pie en el Consejo y mand&oacute; que hicieran salir por un momento a los ap&oacute;stoles.<sup class="versenum">35&nbsp;</sup>Luego dijo: &laquo;Hombres de Israel, piensen dos veces en lo que est&aacute;n a punto de hacer con estos hombres.<sup class="versenum">36&nbsp;</sup>Hace alg&uacute;n tiempo surgi&oacute; Teudas, jact&aacute;ndose de ser alguien, y se le unieron unos cuatrocientos hombres. Pero lo mataron y todos sus seguidores se dispersaron y all&iacute; se acab&oacute; todo.<sup class="versenum">37&nbsp;</sup>Despu&eacute;s de &eacute;l surgi&oacute; Judas el galileo, en los d&iacute;as del censo, y logr&oacute; que la gente lo siguiera. A &eacute;l tambi&eacute;n lo mataron, y todos sus secuaces se dispersaron.<sup class="versenum">38&nbsp;</sup>En este caso les aconsejo que dejen a estos hombres en paz. &iexcl;Su&eacute;ltenlos! Si lo que se proponen y hacen es de origen humano, fracasar&aacute;;<sup class="versenum">39&nbsp;</sup>pero, si es de Dios, no podr&aacute;n destruirlos, y ustedes se encontrar&aacute;n luchando contra Dios&raquo;.</p>

<p>Se dejaron persuadir por Gamaliel.<sup class="versenum">40&nbsp;</sup>Entonces llamaron a los ap&oacute;stoles y, luego de azotarlos, les ordenaron que no hablaran m&aacute;s en el nombre de Jes&uacute;s. Despu&eacute;s de eso los soltaron.</p>

<p><sup class="versenum">41&nbsp;</sup>As&iacute;, pues, los ap&oacute;stoles salieron del Consejo, llenos de gozo por haber sido considerados dignos de sufrir afrentas por causa del Nombre.<sup class="versenum">42&nbsp;</sup>Y d&iacute;a tras d&iacute;a, en el templo y de casa en casa, no dejaban de ense&ntilde;ar y anunciar las buenas nuevas de que Jes&uacute;s es el Mes&iacute;as.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/309.mp4" type="button" class="external-movie">
         Mira Hechos 5:12-42</button>
    <div class="collapsed"></div>




<h2 class="up">Preguntas de Descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; hay de nuevo o se ha desarrollado a estas alturas de la historia?</li>
	<li>&iquest;Qu&eacute; se est&aacute; modelando acerca de una vida dependiente del Esp&iacute;ritu, haciendo disc&iacute;pulos o liderazgo?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p>Preguntas adicionales que puede utilizar:</p>

<ul>
	<li>&iquest;C&oacute;mo contin&uacute;an los seguidores de Jes&uacute;s Su obra de hacer disc&iacute;pulos y plantar iglesias?</li>
	<li>&iquest;C&oacute;mo est&aacute; impactando el Evangelio en las personas y en la sociedad?</li>
	<li>&iquest;Qu&eacute; barreras u obst&aacute;culos se superaron y c&oacute;mo se superaron?</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="up">Leer, contar y corregir</h2>

<ul class="up">
	<li>Lea la historia de nuevo. P&iacute;dale a alguien que cuente la historia y p&iacute;dale al grupo que corrija si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Resumen</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Los creyentes ten&iacute;an una buena reputaci&oacute;n entre las personas que viv&iacute;an en Jerusal&eacute;n. Muchos de los pueblos y ciudades cercanas estaban siendo atra&iacute;dos por el ministerio de la iglesia de Jerusal&eacute;n. Los Ap&oacute;stoles estaban viviendo lo que hab&iacute;an sido entrenados para hacer por Jes&uacute;s: sanar a los enfermos, expulsar demonios y predicar las buenas nuevas del Reino (<span class="popup-link" @click = "popUp('pop3')"> Mateo 10</span>,&nbsp;&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<p><sup class="versenum">1 </sup>Reuni&oacute; a sus doce disc&iacute;pulos y les dio autoridad para expulsar a los esp&iacute;ritus malignos y sanar toda enfermedad y toda dolencia.</p>

	<p><sup class="versenum">2&nbsp;</sup>Estos son los nombres de los doce ap&oacute;stoles: primero Sim&oacute;n, llamado Pedro, y su hermano Andr&eacute;s; Jacobo y su hermano Juan, hijos de Zebedeo;<sup class="versenum">3&nbsp;</sup>Felipe y Bartolom&eacute;; Tom&aacute;s y Mateo, el recaudador de impuestos; Jacobo, hijo de Alfeo, y Tadeo;<sup class="versenum">4&nbsp;</sup>Sim&oacute;n el Zelote y Judas Iscariote, el que lo traicion&oacute;.</p>

	<p><sup class="versenum">5&nbsp;</sup>Jes&uacute;s envi&oacute; a estos doce con las siguientes instrucciones: &laquo;No vayan entre los gentiles ni entren en ning&uacute;n pueblo de los samaritanos.<sup class="versenum">6&nbsp;</sup>Vayan m&aacute;s bien a las ovejas descarriadas del pueblo de Israel.<sup class="versenum">7&nbsp;</sup>Dondequiera que vayan, prediquen este mensaje: &ldquo;El reino de los cielos est&aacute; cerca&rdquo;.<sup class="versenum">8&nbsp;</sup>Sanen a los enfermos, resuciten a los muertos, limpien de su enfermedad a los que tienen lepra, expulsen a los demonios. Lo que ustedes recibieron gratis, denlo gratuitamente.<sup class="versenum">9&nbsp;</sup>No lleven oro ni plata ni cobre en el cintur&oacute;n,<sup class="versenum">10&nbsp;</sup>ni bolsa para el camino, ni dos mudas de ropa, ni sandalias, ni bast&oacute;n; porque el trabajador merece que se le d&eacute; su sustento.</p>

	<p><sup class="versenum">11&nbsp;</sup>&raquo;En cualquier pueblo o aldea donde entren, busquen a alguien que merezca recibirlos, y qu&eacute;dense en su casa hasta que se vayan de ese lugar.<sup class="versenum">12&nbsp;</sup>Al entrar, digan: &ldquo;Paz a esta casa&rdquo;.<sup class="versenum">13&nbsp;</sup>Si el hogar se lo merece, que la paz de ustedes reine en &eacute;l; y, si no, que la paz se vaya con ustedes.<sup class="versenum">14&nbsp;</sup>Si alguno no los recibe bien ni escucha sus palabras, al salir de esa casa o de ese pueblo, sac&uacute;danse el polvo de los pies.<sup class="versenum">15&nbsp;</sup>Les aseguro que en el d&iacute;a del juicio el castigo para Sodoma y Gomorra ser&aacute; m&aacute;s tolerable que para ese pueblo.<sup class="versenum">16&nbsp;</sup>Los env&iacute;o como ovejas en medio de lobos. Por tanto, sean astutos como serpientes y sencillos como palomas.</p>

	<p><sup class="versenum">17&nbsp;</sup>&raquo;Tengan cuidado con la gente; los entregar&aacute;n a los tribunales y los azotar&aacute;n en las sinagogas.<sup class="versenum">18&nbsp;</sup>Por mi causa los llevar&aacute;n ante gobernadores y reyes para dar testimonio a ellos y a los gentiles.<sup class="versenum">19&nbsp;</sup>Pero, cuando los arresten, no se preocupen por lo que van a decir o c&oacute;mo van a decirlo. En ese momento se les dar&aacute; lo que han de decir,<sup class="versenum">20&nbsp;</sup>porque no ser&aacute;n ustedes los que hablen, sino que el Esp&iacute;ritu de su Padre hablar&aacute; por medio de ustedes.</p>

	<p><sup class="versenum">21&nbsp;</sup>&raquo;El hermano entregar&aacute; a la muerte al hermano, y el padre al hijo. Los hijos se rebelar&aacute;n contra sus padres y har&aacute;n que los maten.<sup class="versenum">22&nbsp;</sup>Por causa de mi nombre todo el mundo los odiar&aacute;, pero el que se mantenga firme hasta el fin ser&aacute; salvo.<sup class="versenum">23&nbsp;</sup>Cuando los persigan en una ciudad, huyan a otra. Les aseguro que no terminar&aacute;n de recorrer las ciudades de Israel antes de que venga el Hijo del hombre.</p>

	<p><sup class="versenum">24&nbsp;</sup>&raquo;El disc&iacute;pulo no es superior a su maestro, ni el siervo superior a su amo.<sup class="versenum">25&nbsp;</sup>Basta con que el disc&iacute;pulo sea como su maestro, y el siervo como su amo. Si al jefe de la casa lo han llamado Beelzeb&uacute;, &iexcl;cu&aacute;nto m&aacute;s a los de su familia!</p>

	<p><sup class="versenum">26&nbsp;</sup>&raquo;As&iacute; que no les tengan miedo; porque no hay nada encubierto que no llegue a revelarse, ni nada escondido que no llegue a conocerse.<sup class="versenum">27&nbsp;</sup>Lo que les digo en la oscuridad, d&iacute;ganlo ustedes a plena luz; lo que se les susurra al o&iacute;do, procl&aacute;menlo desde las azoteas.<sup class="versenum">28&nbsp;</sup>No teman a los que matan el cuerpo, pero no pueden matar el alma. Teman m&aacute;s bien al que puede destruir alma y cuerpo en el infierno.<sup class="versenum">29&nbsp;</sup>&iquest;No se venden dos gorriones por una monedita? Sin embargo, ni uno de ellos caer&aacute; a tierra sin que lo permita el Padre;<sup class="versenum">30&nbsp;</sup>y &eacute;l les tiene contados a ustedes aun los cabellos de la cabeza.<sup class="versenum">31&nbsp;</sup>As&iacute; que no tengan miedo; ustedes valen m&aacute;s que muchos gorriones.</p>

	<p><sup class="versenum">32&nbsp;</sup>&raquo;A cualquiera que me reconozca delante de los dem&aacute;s, yo tambi&eacute;n lo reconocer&eacute; delante de mi Padre que est&aacute; en el cielo.<sup class="versenum">33&nbsp;</sup>Pero a cualquiera que me desconozca delante de los dem&aacute;s, yo tambi&eacute;n lo desconocer&eacute; delante de mi Padre que est&aacute; en el cielo.</p>

	<p><sup class="versenum">34&nbsp;</sup>&raquo;No crean que he venido a traer paz a la tierra. No vine a traer paz, sino espada.<sup class="versenum">35&nbsp;</sup>Porque he venido a poner en conflicto</p>

	<p>&raquo;&ldquo;al hombre contra su padre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;a la hija contra su madre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;a la nuera contra su suegra;<br />
	<sup class="versenum">36&nbsp;</sup>los enemigos de cada cual<br />
	&nbsp;&nbsp;&nbsp;&nbsp;ser&aacute;n los de su propia familia&rdquo;.</p>
	</div>

	<p><sup class="versenum">37&nbsp;</sup>&raquo;El que quiere a su padre o a su madre m&aacute;s que a m&iacute; no es digno de m&iacute;; el que quiere a su hijo o a su hija m&aacute;s que a m&iacute; no es digno de m&iacute;;<sup class="versenum">38&nbsp;</sup>y el que no toma su cruz y me sigue no es digno de m&iacute;.<sup class="versenum">39&nbsp;</sup>El que se aferre a su propia vida, la perder&aacute;, y el que renuncie a su propia vida por mi causa, la encontrar&aacute;.</p>

	<p><sup class="versenum">40&nbsp;</sup>&raquo;Quien los recibe a ustedes me recibe a m&iacute;; y quien me recibe a m&iacute; recibe al que me envi&oacute;.<sup class="versenum">41&nbsp;</sup>Cualquiera que recibe a un profeta por tratarse de un profeta recibir&aacute; recompensa de profeta; y el que recibe a un justo por tratarse de un justo recibir&aacute; recompensa de justo.<sup class="versenum">42&nbsp;</sup>Y quien d&eacute; siquiera un vaso de agua fresca a uno de estos peque&ntilde;os por tratarse de uno de mis disc&iacute;pulos, les aseguro que no perder&aacute; su recompensa&raquo;.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop4')"> Lucas 10</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>Jes&uacute;s env&iacute;a a los setenta y dos</h3>

	<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, el Se&ntilde;or escogi&oacute; a otros setenta y dos para enviarlos de dos en dos delante de &eacute;l a todo pueblo y lugar adonde &eacute;l pensaba ir.<sup class="versenum">2&nbsp;</sup>&laquo;Es abundante la cosecha &mdash;les dijo&mdash;, pero son pocos los obreros. P&iacute;danle, por tanto, al Se&ntilde;or de la cosecha que mande obreros a su campo.<sup class="versenum">3&nbsp;</sup>&iexcl;Vayan ustedes! Miren que los env&iacute;o como corderos en medio de lobos.<sup class="versenum">4&nbsp;</sup>No lleven monedero ni bolsa ni sandalias; ni se detengan a saludar a nadie por el camino.</p>

	<p><sup class="versenum">5&nbsp;</sup>&raquo;Cuando entren en una casa, digan primero: &ldquo;Paz a esta casa&rdquo;.<sup class="versenum">6&nbsp;</sup>Si hay all&iacute; alguien digno de paz, gozar&aacute; de ella; y, si no, la bendici&oacute;n no se cumplir&aacute;.<sup class="versenum">7&nbsp;</sup>Qu&eacute;dense en esa casa, y coman y beban de lo que ellos tengan, porque el trabajador tiene derecho a su sueldo. No anden de casa en casa.</p>

	<p><sup class="versenum">8&nbsp;</sup>&raquo;Cuando entren en un pueblo y los reciban, coman lo que les sirvan.<sup class="versenum">9&nbsp;</sup>Sanen a los enfermos que encuentren all&iacute; y d&iacute;ganles: &ldquo;El reino de Dios ya est&aacute; cerca de ustedes&rdquo;.<sup class="versenum">10&nbsp;</sup>Pero, cuando entren en un pueblo donde no los reciban, salgan a las plazas y digan:<sup class="versenum">11&nbsp;</sup>&ldquo;Aun el polvo de este pueblo, que se nos ha pegado a los pies, nos lo sacudimos en protesta contra ustedes. Pero tengan por seguro que ya est&aacute; cerca el reino de Dios&rdquo;.<sup class="versenum">12&nbsp;</sup>Les digo que en aquel d&iacute;a ser&aacute; m&aacute;s tolerable el castigo para Sodoma que para ese pueblo.</p>

	<p><sup class="versenum">13&nbsp;</sup>&raquo;&iexcl;Ay de ti, Coraz&iacute;n! &iexcl;Ay de ti, Betsaida! Si se hubieran hecho en Tiro y en Sid&oacute;n los milagros que se hicieron en medio de ustedes, ya hace tiempo que se habr&iacute;an arrepentido con grandes lamentos.<sup class="versenum">14&nbsp;</sup>Pero en el juicio ser&aacute; m&aacute;s tolerable el castigo para Tiro y Sid&oacute;n que para ustedes.<sup class="versenum">15&nbsp;</sup>Y t&uacute;, Caperna&uacute;m, &iquest;acaso ser&aacute;s levantada hasta el cielo? No, sino que descender&aacute;s hasta el abismo.</p>

	<p><sup class="versenum">16&nbsp;</sup>&raquo;El que los escucha a ustedes, me escucha a m&iacute;; el que los rechaza a ustedes, me rechaza a m&iacute;; y el que me rechaza a m&iacute;, rechaza al que me envi&oacute;&raquo;.</p>

	<p><sup class="versenum">17&nbsp;</sup>Cuando los setenta y dos regresaron, dijeron contentos:</p>

	<p>&mdash;Se&ntilde;or, hasta los demonios se nos someten en tu nombre.</p>

	<p><sup class="versenum">18&nbsp;</sup>&mdash;Yo ve&iacute;a a Satan&aacute;s caer del cielo como un rayo &mdash;respondi&oacute; &eacute;l&mdash;.<sup class="versenum">19&nbsp;</sup>S&iacute;, les he dado autoridad a ustedes para pisotear serpientes y escorpiones y vencer todo el poder del enemigo; nada les podr&aacute; hacer da&ntilde;o.<sup class="versenum">20&nbsp;</sup>Sin embargo, no se alegren de que puedan someter a los esp&iacute;ritus, sino al&eacute;grense de que sus nombres est&aacute;n escritos en el cielo.</p>

	<p><sup class="versenum">21&nbsp;</sup>En aquel momento Jes&uacute;s, lleno de alegr&iacute;a por el Esp&iacute;ritu Santo, dijo: &laquo;Te alabo, Padre, Se&ntilde;or del cielo y de la tierra, porque habiendo escondido estas cosas de los sabios e instruidos, se las has revelado a los que son como ni&ntilde;os. S&iacute;, Padre, porque esa fue tu buena voluntad.</p>

	<p><sup class="versenum">22&nbsp;</sup>&raquo;Mi Padre me ha entregado todas las cosas. Nadie sabe qui&eacute;n es el Hijo, sino el Padre, y nadie sabe qui&eacute;n es el Padre, sino el Hijo y aquel a quien el Hijo quiera revel&aacute;rselo&raquo;.</p>

	<p><sup class="versenum">23&nbsp;</sup>Volvi&eacute;ndose a sus disc&iacute;pulos, les dijo aparte: &laquo;Dichosos los ojos que ven lo que ustedes ven.<sup class="versenum">24&nbsp;</sup>Les digo que muchos profetas y reyes quisieron ver lo que ustedes ven, pero no lo vieron; y o&iacute;r lo que ustedes oyen, pero no lo oyeron&raquo;.</p>

	<h3>Par&aacute;bola del buen samaritano</h3>

	<p><sup class="versenum">25&nbsp;</sup>En esto se present&oacute; un experto en la ley y, para poner a prueba a Jes&uacute;s, le hizo esta pregunta:</p>

	<p>&mdash;Maestro, &iquest;qu&eacute; tengo que hacer para heredar la vida eterna?</p>

	<p><sup class="versenum">26&nbsp;</sup>Jes&uacute;s replic&oacute;:</p>

	<p>&mdash;&iquest;Qu&eacute; est&aacute; escrito en la ley? &iquest;C&oacute;mo la interpretas t&uacute;?</p>

	<p><sup class="versenum">27&nbsp;</sup>Como respuesta el hombre cit&oacute;:</p>

	<p>&mdash;&ldquo;Ama al Se&ntilde;or tu Dios con todo tu coraz&oacute;n, con todo tu ser, con todas tus fuerzas y con toda tu mente&rdquo;, y: &ldquo;Ama a tu pr&oacute;jimo como a ti mismo&rdquo;.</p>

	<p><sup class="versenum">28&nbsp;</sup>&mdash;Bien contestado &mdash;le dijo Jes&uacute;s&mdash;. Haz eso y vivir&aacute;s.</p>

	<p><sup class="versenum">29&nbsp;</sup>Pero &eacute;l quer&iacute;a justificarse, as&iacute; que le pregunt&oacute; a Jes&uacute;s:</p>

	<p>&mdash;&iquest;Y qui&eacute;n es mi pr&oacute;jimo?</p>

	<p><sup class="versenum">30&nbsp;</sup>Jes&uacute;s respondi&oacute;:</p>

	<p>&mdash;Bajaba un hombre de Jerusal&eacute;n a Jeric&oacute;, y cay&oacute; en manos de unos ladrones. Le quitaron la ropa, lo golpearon y se fueron, dej&aacute;ndolo medio muerto.<sup class="versenum">31&nbsp;</sup>Resulta que viajaba por el mismo camino un sacerdote quien, al verlo, se desvi&oacute; y sigui&oacute; de largo.<sup class="versenum">32&nbsp;</sup>As&iacute; tambi&eacute;n lleg&oacute; a aquel lugar un levita y, al verlo, se desvi&oacute; y sigui&oacute; de largo.<sup class="versenum">33&nbsp;</sup>Pero un samaritano que iba de viaje lleg&oacute; adonde estaba el hombre y, vi&eacute;ndolo, se compadeci&oacute; de &eacute;l.<sup class="versenum">34&nbsp;</sup>Se acerc&oacute;, le cur&oacute; las heridas con vino y aceite, y se las vend&oacute;. Luego lo mont&oacute; sobre su propia cabalgadura, lo llev&oacute; a un alojamiento y lo cuid&oacute;.<sup class="versenum">35&nbsp;</sup>Al d&iacute;a siguiente, sac&oacute; dos monedas de plata y se las dio al due&ntilde;o del alojamiento. &ldquo;Cu&iacute;demelo &mdash;le dijo&mdash;, y lo que gaste usted de m&aacute;s, se lo pagar&eacute; cuando yo vuelva&rdquo;.<sup class="versenum">36&nbsp;</sup>&iquest;Cu&aacute;l de estos tres piensas que demostr&oacute; ser el pr&oacute;jimo del que cay&oacute; en manos de los ladrones?</p>

	<p><sup class="versenum">37&nbsp;</sup>&mdash;El que se compadeci&oacute; de &eacute;l &mdash;contest&oacute; el experto en la ley.</p>

	<p>&mdash;Anda entonces y haz t&uacute; lo mismo &mdash;concluy&oacute; Jes&uacute;s.</p>

	<p><sup class="versenum">38&nbsp;</sup>Mientras iba de camino con sus disc&iacute;pulos, Jes&uacute;s entr&oacute; en una aldea, y una mujer llamada Marta lo recibi&oacute; en su casa.<sup class="versenum">39&nbsp;</sup>Ten&iacute;a ella una hermana llamada Mar&iacute;a que, sentada a los pies del Se&ntilde;or, escuchaba lo que &eacute;l dec&iacute;a.<sup class="versenum">40&nbsp;</sup>Marta, por su parte, se sent&iacute;a abrumada porque ten&iacute;a mucho que hacer. As&iacute; que se acerc&oacute; a &eacute;l y le dijo:</p>

	<p>&mdash;Se&ntilde;or, &iquest;no te importa que mi hermana me haya dejado sirviendo sola? &iexcl;Dile que me ayude!</p>

	<p><sup class="versenum">41&nbsp;</sup>&mdash;Marta, Marta &mdash;le contest&oacute; Jes&uacute;s&mdash;, est&aacute;s inquieta y preocupada por muchas cosas,<sup class="versenum">42&nbsp;</sup>pero solo una es necesaria. Mar&iacute;a ha escogido la mejor, y nadie se la quitar&aacute;.</p>
	<!-- end bible --></div>
	&nbsp;Sin embargo, no iban a la gente fuera de Jerusal&eacute;n como Jes&uacute;s les hab&iacute;a instruido (<span class="popup-link" @click = "popUp('pop5')"> Hechos 1:8</span>).&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</p>
	<!-- end bible --></div>
	&nbsp;Los l&iacute;deres religiosos reaccionaron a la creciente popularidad de esta nueva comunidad con celos al igual que reaccionaron a la popularidad de Jes&uacute;s. Esto llev&oacute; a que los Ap&oacute;stoles fueran perseguidos. Jes&uacute;s intervino una vez m&aacute;s y envi&oacute; un &aacute;ngel para ayudarlos milagrosamente a escapar de la prisi&oacute;n. Cuando se enfrent&oacute; a los l&iacute;deres religiosos de nuevo, Pedro insisti&oacute; en que deb&iacute;an obedecer a Dios por encima de todos los dem&aacute;s. Los l&iacute;deres religiosos ahora intensificaron su persecuci&oacute;n para incluir la violencia f&iacute;sica. Los Ap&oacute;stoles se regocijaron en medio de estas circunstancias y consideraron un honor sufrir como Jes&uacute;s.</li>
</ul>

</div>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:
	<ul>
		<li>Orar, Cuidar, Compartir</li>
		<li>Evangelio</li>
		<li>Estudios B&iacute;blicos Fundamentales</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo comparan con a su grupo.</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">Orando por la Misi&oacute;n</h2>

<ul class="forward">
	<li>Comprometa las metas de todos al Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y que nos use para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'El Ministerio Exitoso trae Persecución: ', '/content/M2/spa/multiply3/multiply309.html')">
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