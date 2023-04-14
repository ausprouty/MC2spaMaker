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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús y la Palabra de Dios</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
<!-- end bible --></div>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s.</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunte: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tus declaraciones: Yo har&eacute;&hellip; cu&aacute;ndo&hellip;?&quot;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y est&iacute;mulo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p class="back">Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final, o</li>
	<li class="back">reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo, o</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos.</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 4:1-13</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 4:1-13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>Tentaci&oacute;n de Jes&uacute;s</h3>

<p><sup class="versenum">1 </sup>Jes&uacute;s, lleno del Esp&iacute;ritu Santo, volvi&oacute; del Jord&aacute;n y fue llevado por el Esp&iacute;ritu al desierto.<sup class="versenum">2&nbsp;</sup>All&iacute; estuvo cuarenta d&iacute;as y fue tentado por el diablo. No comi&oacute; nada durante esos d&iacute;as, pasados los cuales tuvo hambre.</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;Si eres el Hijo de Dios &mdash;le propuso el diablo&mdash;, dile a esta piedra que se convierta en pan.</p>

<p><sup class="versenum">4&nbsp;</sup>Jes&uacute;s le respondi&oacute;:</p>

<p>&mdash;Escrito est&aacute;: &ldquo;No solo de pan vive el hombre&rdquo;.</p>

<p><sup class="versenum">5&nbsp;</sup>Entonces el diablo lo llev&oacute; a un lugar alto y le mostr&oacute; en un instante todos los reinos del mundo.</p>

<p><sup class="versenum">6&nbsp;</sup>&mdash;Sobre estos reinos y todo su esplendor &mdash;le dijo&mdash;, te dar&eacute; la autoridad, porque a m&iacute; me ha sido entregada, y puedo d&aacute;rsela a quien yo quiera.<sup class="versenum">7&nbsp;</sup>As&iacute; que, si me adoras, todo ser&aacute; tuyo.</p>

<p>Jes&uacute;s le contest&oacute;:</p>

<p><sup class="versenum">8&nbsp;</sup>&mdash;Escrito est&aacute;: &ldquo;Adora al Se&ntilde;or tu Dios y s&iacute;rvele solamente a &eacute;l&rdquo;.</p>

<p><sup class="versenum">9&nbsp;</sup>El diablo lo llev&oacute; luego a Jerusal&eacute;n e hizo que se pusiera de pie en la parte m&aacute;s alta del templo, y le dijo:</p>

<p>&mdash;Si eres el Hijo de Dios, &iexcl;t&iacute;rate de aqu&iacute;!<sup class="versenum">10&nbsp;</sup>Pues escrito est&aacute;:</p>

<p>&raquo;&ldquo;Ordenar&aacute; que sus &aacute;ngeles te cuiden.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Te sostendr&aacute;n en sus manos<br />
<sup class="versenum">11&nbsp;</sup>para que no tropieces con piedra alguna&rdquo;&raquo;.</p>
</div>

<p><sup class="versenum">12&nbsp;</sup>&mdash;Tambi&eacute;n est&aacute; escrito: &ldquo;No pongas a prueba al Se&ntilde;or tu Dios&rdquo; &mdash;le replic&oacute; Jes&uacute;s.</p>

<p><sup class="versenum">13&nbsp;</sup>As&iacute; que el diablo, habiendo agotado todo recurso de tentaci&oacute;n, lo dej&oacute; hasta otra oportunidad.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/207.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 4:1-13&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discusi&oacute;n de descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;Por qu&eacute;?</li>
	<li>&iquest;Hay algo nuevo o algo que ha desarrollado hasta este punto de la historia de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de la humanidad o divinidad de Jes&uacute;s en este pasaje?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p><em>Preguntas adicionales que puede utilizar:</em></p>

<ul>
	<li>&iquest;Qu&eacute; est&aacute;n aprendiendo sus seguidores?</li>
	<li>&iquest;Qu&eacute; es lo que Jes&uacute;s nos est&aacute; modelando acerca de la vida, el ministerio o el liderazgo piadoso?</li>
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
	<li class="nobreak-final-final">Jes&uacute;s fue conducido al desierto para ser tentado por Satan&aacute;s mismo. Despu&eacute;s de 40 d&iacute;as de tentaciones de todo tipo, el enemigo viene de nuevo a Jes&uacute;s. Jes&uacute;s ahora est&aacute; d&eacute;bil, cansado y muy, muy hambriento. La tentaci&oacute;n de Satan&aacute;s fue un ataque directo a la verdad de las palabras de Dios. Esta ha sido la estrategia de Satan&aacute;s desde el principio cuando la us&oacute; con Ad&aacute;n y Eva (<span class="popup-link" @click = "popUp('pop5')"> G&eacute;nesis 3:1-24</span>).&nbsp;

	<p>&nbsp;</p>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<div>
	<p><sup class="versenum">1 </sup>La serpiente era m&aacute;s astuta que todos los animales del campo que Dios el <span class="divine-name small-caps">Se&ntilde;or hab&iacute;a hecho, as&iacute; que le pregunt&oacute; a la mujer:</span></p>

	<p>&mdash;&iquest;Es verdad que Dios les dijo que no comieran de ning&uacute;n &aacute;rbol del jard&iacute;n?</p>

	<p><sup class="versenum">2&nbsp;</sup>&mdash;Podemos comer del fruto de todos los &aacute;rboles &mdash;respondi&oacute; la mujer&mdash;.<sup class="versenum">3&nbsp;</sup>Pero, en cuanto al fruto del &aacute;rbol que est&aacute; en medio del jard&iacute;n, Dios nos ha dicho: &ldquo;No coman de ese &aacute;rbol, ni lo toquen; de lo contrario, morir&aacute;n&rdquo;.</p>

	<p><sup class="versenum">4&nbsp;</sup>Pero la serpiente le dijo a la mujer:</p>

	<p>&mdash;&iexcl;No es cierto, no van a morir!<sup class="versenum">5&nbsp;</sup>Dios sabe muy bien que, cuando coman de ese &aacute;rbol, se les abrir&aacute;n los ojos y llegar&aacute;n a ser como Dios, conocedores del bien y del mal.</p>

	<p><sup class="versenum">6&nbsp;</sup>La mujer vio que el fruto del &aacute;rbol era bueno para comer, y que ten&iacute;a buen aspecto y era deseable para adquirir sabidur&iacute;a, as&iacute; que tom&oacute; de su fruto y comi&oacute;. Luego le dio a su esposo, y tambi&eacute;n &eacute;l comi&oacute;.<sup class="versenum">7&nbsp;</sup>En ese momento se les abrieron los ojos, y tomaron conciencia de su desnudez. Por eso, para cubrirse entretejieron hojas de higuera.</p>

	<p><sup class="versenum">8&nbsp;</sup>Cuando el d&iacute;a comenz&oacute; a refrescar, el hombre y la mujer oyeron que Dios el <span class="divine-name small-caps">Se&ntilde;or andaba recorriendo el jard&iacute;n; entonces corrieron a esconderse entre los &aacute;rboles, para que Dios no los viera.<sup class="versenum">9&nbsp;</sup>Pero Dios el <span class="divine-name small-caps">Se&ntilde;or llam&oacute; al hombre y le dijo:</span></span></p>

	<p>&mdash;&iquest;D&oacute;nde est&aacute;s?</p>

	<p><sup class="versenum">10&nbsp;</sup>El hombre contest&oacute;:</p>

	<p>&mdash;Escuch&eacute; que andabas por el jard&iacute;n, y tuve miedo porque estoy desnudo. Por eso me escond&iacute;.</p>

	<p><sup class="versenum">11&nbsp;</sup>&mdash;&iquest;Y qui&eacute;n te ha dicho que est&aacute;s desnudo? &mdash;le pregunt&oacute; Dios&mdash;. &iquest;Acaso has comido del fruto del &aacute;rbol que yo te prohib&iacute; comer?</p>

	<p><sup class="versenum">12&nbsp;</sup>&Eacute;l respondi&oacute;:</p>

	<p>&mdash;La mujer que me diste por compa&ntilde;era me dio de ese fruto, y yo lo com&iacute;.</p>

	<p><sup class="versenum">13&nbsp;</sup>Entonces Dios el <span class="divine-name small-caps">Se&ntilde;or le pregunt&oacute; a la mujer:</span></p>

	<p>&mdash;&iquest;Qu&eacute; es lo que has hecho?</p>

	<p>&mdash;La serpiente me enga&ntilde;&oacute;, y com&iacute; &mdash;contest&oacute; ella.</p>

	<p><sup class="versenum">14&nbsp;</sup>Dios el <span class="divine-name small-caps">Se&ntilde;or dijo entonces a la serpiente:</span></p>

	<p>&laquo;Por causa de lo que has hecho,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&iexcl;maldita ser&aacute;s entre todos los animales,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;tanto dom&eacute;sticos como salvajes!<br />
	Te arrastrar&aacute;s sobre tu vientre,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y comer&aacute;s polvo todos los d&iacute;as de tu vida.<br />
	<sup class="versenum">15&nbsp;</sup>Pondr&eacute; enemistad entre t&uacute; y la mujer,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y entre tu simiente y la de ella;<br />
	su simiente te aplastar&aacute; la cabeza,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;pero t&uacute; le morder&aacute;s el tal&oacute;n&raquo;.</p>
	</div>

	<p><sup class="versenum">16&nbsp;</sup>A la mujer le dijo:</p>

	<p>&laquo;Multiplicar&eacute; tus dolores en el parto,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y dar&aacute;s a luz a tus hijos con dolor.<br />
	Desear&aacute;s a tu marido,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y &eacute;l te dominar&aacute;&raquo;.</p>
	</div>

	<p><sup class="versenum">17&nbsp;</sup>Al hombre le dijo:</p>

	<p>&laquo;Por cuanto le hiciste caso a tu mujer,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y comiste del &aacute;rbol del que te prohib&iacute; comer,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&iexcl;maldita ser&aacute; la tierra por tu culpa!<br />
	Con penosos trabajos comer&aacute;s de ella<br />
	&nbsp;&nbsp;&nbsp;&nbsp;todos los d&iacute;as de tu vida.<br />
	<sup class="versenum">18&nbsp;</sup>La tierra te producir&aacute; cardos y espinas,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y comer&aacute;s hierbas silvestres.<br />
	<sup class="versenum">19&nbsp;</sup>Te ganar&aacute;s el pan con el sudor de tu frente,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;hasta que vuelvas a la misma tierra<br />
	&nbsp;&nbsp;&nbsp;&nbsp;de la cual fuiste sacado.<br />
	Porque polvo eres,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y al polvo volver&aacute;s&raquo;.</p>
	</div>

	<p><sup class="versenum">20&nbsp;</sup>El hombre llam&oacute; Eva a su mujer, porque ella ser&iacute;a la madre de todo ser viviente.</p>

	<p><sup class="versenum">21&nbsp;</sup>Dios el <span class="divine-name small-caps">Se&ntilde;or hizo ropa de pieles para el hombre y su mujer, y los visti&oacute;.<sup class="versenum">22&nbsp;</sup>Y dijo: &laquo;El ser humano ha llegado a ser como uno de nosotros, pues tiene conocimiento del bien y del mal. No vaya a ser que extienda su mano y tambi&eacute;n tome del fruto del &aacute;rbol de la vida, y lo coma y viva para siempre&raquo;.<sup class="versenum">23&nbsp;</sup>Entonces Dios el <span class="divine-name small-caps">Se&ntilde;or expuls&oacute; al ser humano del jard&iacute;n del Ed&eacute;n, para que trabajara la tierra de la cual hab&iacute;a sido hecho.<sup class="versenum">24&nbsp;</sup>Luego de expulsarlo, puso al oriente del jard&iacute;n del Ed&eacute;n a los querubines, y una espada ardiente que se mov&iacute;a por todos lados, para custodiar el camino que lleva al &aacute;rbol de la vida.</span></span></p>
	<!-- end bible --></div>
	Jes&uacute;s nos modela c&oacute;mo citar las promesas de Dios para lidiar con los ataques del enemigo.

	<p class="up">Estudio adicional: <span class="popup-link" @click = "popUp('pop4')"> Mateo 4:1-11</span></p>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<p><sup class="versenum">1 </sup>Luego el Esp&iacute;ritu llev&oacute; a Jes&uacute;s al desierto para que el diablo lo sometiera a tentaci&oacute;n.<sup class="versenum">2&nbsp;</sup>Despu&eacute;s de ayunar cuarenta d&iacute;as y cuarenta noches, tuvo hambre.<sup class="versenum">3&nbsp;</sup>El tentador se le acerc&oacute; y le propuso:</p>

	<p>&mdash;Si eres el Hijo de Dios, ordena a estas piedras que se conviertan en pan.</p>

	<p><sup class="versenum">4&nbsp;</sup>Jes&uacute;s le respondi&oacute;:</p>

	<p>&mdash;Escrito est&aacute;: &ldquo;No solo de pan vive el hombre, sino de toda palabra que sale de la boca de Dios&rdquo;.</p>

	<p><sup class="versenum">5&nbsp;</sup>Luego el diablo lo llev&oacute; a la ciudad santa e hizo que se pusiera de pie sobre la parte m&aacute;s alta del templo, y le dijo:</p>

	<p><sup class="versenum">6&nbsp;</sup>&mdash;Si eres el Hijo de Dios, t&iacute;rate abajo. Porque escrito est&aacute;:</p>

	<p>&raquo;&ldquo;Ordenar&aacute; que sus &aacute;ngeles<br />
	&nbsp;&nbsp;&nbsp;&nbsp;te sostengan en sus manos,<br />
	para que no tropieces con piedra alguna&rdquo;&raquo;.</p>
	</div>

	<p><sup class="versenum">7&nbsp;</sup>&mdash;Tambi&eacute;n est&aacute; escrito: &ldquo;No pongas a prueba al Se&ntilde;or tu Dios&rdquo; &mdash;le contest&oacute; Jes&uacute;s.</p>

	<p><sup class="versenum">8&nbsp;</sup>De nuevo lo tent&oacute; el diablo, llev&aacute;ndolo a una monta&ntilde;a muy alta, y le mostr&oacute; todos los reinos del mundo y su esplendor.</p>

	<p><sup class="versenum">9&nbsp;</sup>&mdash;Todo esto te dar&eacute; si te postras y me adoras.</p>

	<p><sup class="versenum">10&nbsp;</sup>&mdash;&iexcl;Vete, Satan&aacute;s! &mdash;le dijo Jes&uacute;s&mdash;. Porque escrito est&aacute;: &ldquo;Adora al Se&ntilde;or tu Dios y s&iacute;rvele solamente a &eacute;l&rdquo;.</p>

	<p><sup class="versenum">11&nbsp;</sup>Entonces el diablo lo dej&oacute;, y unos &aacute;ngeles acudieron a servirle.</p>
	<!-- end bible --></div>
	</li>
</ul>
</div>

<p><em>Practique la entrega y la comuni&oacute;n aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p class="up">Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li class="up">Orar, Cuidar, Compartir</li>
	<li class="up">Compartir el Evangelio</li>
	<li class="up">Estudios B&iacute;blicos Fundacionales</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba sus declaraciones de &ldquo;Yo har&eacute;&hellip;para cuando&hellip;&rdquo; y comp&aacute;rtala en su peque&ntilde;o grupo.</li>
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
	<li>Comprometa las metas de todos con el Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y &uacute;sanos para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Jesús y la Palabra de Dios: ', '/content/M2/spa/multiply2/multiply207.html')">
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