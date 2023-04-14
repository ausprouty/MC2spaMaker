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
                        <div class="chapter_number ltr"><h1>30.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo incomprendido</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 7:18-35</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 7:18-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<h3>Jes&uacute;s y Juan el Bautista</h3>

<p><sup class="versenum">18&nbsp;</sup>Los disc&iacute;pulos de Juan le contaron todo esto. &Eacute;l llam&oacute; a dos de ellos<sup class="versenum">19&nbsp;</sup>y los envi&oacute; al Se&ntilde;or a preguntarle:</p>

<p>&mdash;&iquest;Eres t&uacute; el que ha de venir, o debemos esperar a otro?</p>

<p><sup class="versenum">20&nbsp;</sup>Cuando se acercaron a Jes&uacute;s, ellos le dijeron:</p>

<p>&mdash;Juan el Bautista nos ha enviado a preguntarte: &ldquo;&iquest;Eres t&uacute; el que ha de venir, o debemos esperar a otro?&rdquo;</p>

<p><sup class="versenum">21&nbsp;</sup>En ese mismo momento Jes&uacute;s san&oacute; a muchos que ten&iacute;an enfermedades, dolencias y esp&iacute;ritus malignos, y les dio la vista a muchos ciegos.<sup class="versenum">22&nbsp;</sup>Entonces les respondi&oacute; a los enviados:</p>

<p>&mdash;Vayan y cu&eacute;ntenle a Juan lo que han visto y o&iacute;do: Los ciegos ven, los cojos andan, los que tienen lepra son sanados, los sordos oyen, los muertos resucitan y a los pobres se les anuncian las buenas nuevas.<sup class="versenum">23&nbsp;</sup>Dichoso el que no tropieza por causa m&iacute;a.</p>

<p><sup class="versenum">24&nbsp;</sup>Cuando se fueron los enviados, Jes&uacute;s comenz&oacute; a hablarle a la multitud acerca de Juan: &laquo;&iquest;Qu&eacute; salieron a ver al desierto? &iquest;Una ca&ntilde;a sacudida por el viento?<sup class="versenum">25&nbsp;</sup>Si no, &iquest;qu&eacute; salieron a ver? &iquest;A un hombre vestido con ropa fina? Claro que no, pues los que se visten ostentosamente y llevan una vida de lujo est&aacute;n en los palacios reales.<sup class="versenum">26&nbsp;</sup>Entonces, &iquest;qu&eacute; salieron a ver? &iquest;A un profeta? S&iacute;, les digo, y m&aacute;s que profeta.<sup class="versenum">27&nbsp;</sup>Este es de quien est&aacute; escrito:</p>

<p>&raquo;&ldquo;Yo estoy por enviar a mi mensajero delante de ti,<br />
&nbsp;&nbsp;&nbsp;&nbsp;el cual preparar&aacute; el camino&rdquo;.</p>
</div>

<p><sup class="versenum">28&nbsp;</sup>Les digo que entre los mortales no ha habido nadie m&aacute;s grande que Juan; sin embargo, el m&aacute;s peque&ntilde;o en el reino de Dios es m&aacute;s grande que &eacute;l&raquo;.</p>

<p><sup class="versenum">29&nbsp;</sup>Al o&iacute;r esto, todo el pueblo, y hasta los recaudadores de impuestos, reconocieron que el camino de Dios era justo, y fueron bautizados por Juan.<sup class="versenum">30&nbsp;</sup>Pero los fariseos y los expertos en la ley no se hicieron bautizar por Juan, rechazando as&iacute; el prop&oacute;sito de Dios respecto a ellos.</p>

<p><sup class="versenum">31&nbsp;</sup>&laquo;Entonces, &iquest;con qu&eacute; puedo comparar a la gente de esta generaci&oacute;n? &iquest;A qui&eacute;n se parecen ellos?<sup class="versenum">32&nbsp;</sup>Se parecen a ni&ntilde;os sentados en la plaza que se gritan unos a otros:</p>

<p>&raquo;&ldquo;Tocamos la flauta,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y ustedes no bailaron;<br />
entonamos un canto f&uacute;nebre,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y ustedes no lloraron&rdquo;.</p>
</div>

<p><sup class="versenum">33&nbsp;</sup>Porque vino Juan el Bautista, que no com&iacute;a pan ni beb&iacute;a vino, y ustedes dicen: &ldquo;Tiene un demonio&rdquo;.<sup class="versenum">34&nbsp;</sup>Vino el Hijo del hombre, que come y bebe, y ustedes dicen: &ldquo;Este es un glot&oacute;n y un borracho, amigo de recaudadores de impuestos y de pecadores&rdquo;.<sup class="versenum">35&nbsp;</sup>Pero la sabidur&iacute;a queda demostrada por los que la siguen&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/230.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 7:18-35&nbsp;</button>
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

<p class="up">Jes&uacute;s fue a menudo incomprendido. Juan el Bautista hab&iacute;a estado sentado en prisi&oacute;n y estaba luchando con las dudas acerca de que Jes&uacute;s era el que tra&iacute;a el Reino de Dios. As&iacute; que Juan envi&oacute; a algunos de sus disc&iacute;pulos restantes a preguntarle a Jes&uacute;s al respecto. Jes&uacute;s env&iacute;a a los hombres de vuelta con una escritura del Antiguo Testamento de Isa&iacute;as (que es la misma que us&oacute; en Nazaret) para hacerle saber a Juan que estaba haciendo las obras del Mes&iacute;as. Jes&uacute;s entonces apoya el liderazgo de Juan a Sus disc&iacute;pulos. &Eacute;l contrast&oacute; esto con las cosas malas que la gente dijo acerca de Juan y acerca de S&iacute; mismo. Incluso despu&eacute;s de ver a Jes&uacute;s durante m&aacute;s de dos a&ntilde;os, los l&iacute;deres religiosos acusaron a Jes&uacute;s de ser pose&iacute;do por demonios, un glot&oacute;n y un borracho. Aprendemos que ser incomprendido es parte del liderazgo.</p>

<p class="up">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Mateo 11:2-19</span>.</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">2&nbsp;</sup>Juan estaba en la c&aacute;rcel, y al enterarse de lo que Cristo estaba haciendo, envi&oacute; a sus disc&iacute;pulos a que le preguntaran:</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;&iquest;Eres t&uacute; el que ha de venir, o debemos esperar a otro?</p>

<p><sup class="versenum">4&nbsp;</sup>Les respondi&oacute; Jes&uacute;s:</p>

<p>&mdash;Vayan y cu&eacute;ntenle a Juan lo que est&aacute;n viendo y oyendo:<sup class="versenum">5&nbsp;</sup>Los ciegos ven, los cojos andan, los que tienen lepra son sanados, los sordos oyen, los muertos resucitan y a los pobres se les anuncian las buenas nuevas.<sup class="versenum">6&nbsp;</sup>Dichoso el que no tropieza por causa m&iacute;a.</p>

<p><sup class="versenum">7&nbsp;</sup>Mientras se iban los disc&iacute;pulos de Juan, Jes&uacute;s comenz&oacute; a hablarle a la multitud acerca de Juan: &laquo;&iquest;Qu&eacute; salieron a ver al desierto? &iquest;Una ca&ntilde;a sacudida por el viento?<sup class="versenum">8&nbsp;</sup>Si no, &iquest;qu&eacute; salieron a ver? &iquest;A un hombre vestido con ropa fina? Claro que no, pues los que usan ropa de lujo est&aacute;n en los palacios de los reyes.<sup class="versenum">9&nbsp;</sup>Entonces, &iquest;qu&eacute; salieron a ver? &iquest;A un profeta? S&iacute;, les digo, y m&aacute;s que profeta.<sup class="versenum">10&nbsp;</sup>Este es de quien est&aacute; escrito:</p>

<p>&raquo;&ldquo;Yo estoy por enviar a mi mensajero delante de ti,<br />
&nbsp;&nbsp;&nbsp;&nbsp;el cual preparar&aacute; tu camino&rdquo;.</p>
</div>

<p><sup class="versenum">11&nbsp;</sup>Les aseguro que entre los mortales no se ha levantado nadie m&aacute;s grande que Juan el Bautista; sin embargo, el m&aacute;s peque&ntilde;o en el reino de los cielos es m&aacute;s grande que &eacute;l.<sup class="versenum">12&nbsp;</sup>Desde los d&iacute;as de Juan el Bautista hasta ahora, el reino de los cielos ha venido avanzando contra viento y marea, y los que se esfuerzan logran aferrarse a &eacute;l.<sup class="versenum">13&nbsp;</sup>Porque todos los profetas y la ley profetizaron hasta Juan.<sup class="versenum">14&nbsp;</sup>Y, si quieren aceptar mi palabra, Juan es el El&iacute;as que hab&iacute;a de venir.<sup class="versenum">15&nbsp;</sup>El que tenga o&iacute;dos, que oiga.</p>

<p><sup class="versenum">16&nbsp;</sup>&raquo;&iquest;Con qu&eacute; puedo comparar a esta generaci&oacute;n? Se parece a los ni&ntilde;os sentados en la plaza que gritan a los dem&aacute;s:</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;&ldquo;Tocamos la flauta,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y ustedes no bailaron;<br />
Cantamos por los muertos,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y ustedes no lloraron&rdquo;.</p>
</div>

<p><sup class="versenum">18&nbsp;</sup>&raquo;Porque vino Juan, que no com&iacute;a ni beb&iacute;a, y ellos dicen: &ldquo;Tiene un demonio&rdquo;.<sup class="versenum">19&nbsp;</sup>Vino el Hijo del hombre, que come y bebe, y dicen: &ldquo;Este es un glot&oacute;n y un borracho, amigo de recaudadores de impuestos y de pecadores&rdquo;. Pero la sabidur&iacute;a queda demostrada por sus hechos&raquo;.</p>
<!-- end bible --></div>

<p>&nbsp;</p>
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

			<td class="social" @click="share('lesson', 'Liderazgo incomprendido: ', '/content/M2/spa/multiply2/multiply230.html')">
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