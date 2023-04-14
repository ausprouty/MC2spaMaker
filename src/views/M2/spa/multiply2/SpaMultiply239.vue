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
                        <div class="chapter_number ltr"><h1>39.</h1></div>
                        <div class="chapter_title ltr"><h1>Retiro y evaluación de liderazgo</h1></div>
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
	<li class="back">Lea o vea <strong>Mateo 16:13-28</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Mateo 16:13-28</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La confesi&oacute;n de Pedro</h3>

<p><sup class="versenum">13&nbsp;</sup>Cuando lleg&oacute; a la regi&oacute;n de Cesarea de Filipo, Jes&uacute;s pregunt&oacute; a sus disc&iacute;pulos:</p>

<p>&mdash;&iquest;Qui&eacute;n dice la gente que es el Hijo del hombre?</p>

<p>Le respondieron:</p>

<p><sup class="versenum">14&nbsp;</sup>&mdash;Unos dicen que es Juan el Bautista, otros que El&iacute;as, y otros que Jerem&iacute;as o uno de los profetas.</p>

<p><sup class="versenum">15&nbsp;</sup>&mdash;Y ustedes, &iquest;qui&eacute;n dicen que soy yo?</p>

<p><sup class="versenum">16&nbsp;</sup>&mdash;T&uacute; eres el Cristo, el Hijo del Dios viviente &mdash;afirm&oacute; Sim&oacute;n Pedro.</p>

<p><sup class="versenum">17&nbsp;</sup>&mdash;Dichoso t&uacute;, Sim&oacute;n, hijo de Jon&aacute;s &mdash;le dijo Jes&uacute;s&mdash;, porque eso no te lo revel&oacute; ning&uacute;n mortal, sino mi Padre que est&aacute; en el cielo.<sup class="versenum">18&nbsp;</sup>Yo te digo que t&uacute; eres Pedro, y sobre esta piedra edificar&eacute; mi iglesia, y las puertas del reino de la muerte no prevalecer&aacute;n contra ella.<sup class="versenum">19&nbsp;</sup>Te dar&eacute; las llaves del reino de los cielos; todo lo que ates en la tierra quedar&aacute; atado en el cielo, y todo lo que desates en la tierra quedar&aacute; desatado en el cielo.</p>

<p><sup class="versenum">20&nbsp;</sup>Luego les orden&oacute; a sus disc&iacute;pulos que no dijeran a nadie que &eacute;l era el Cristo.</p>

<h3>Jes&uacute;s predice su muerte</h3>

<p><sup class="versenum">21&nbsp;</sup>Desde entonces comenz&oacute; Jes&uacute;s a advertir a sus disc&iacute;pulos que ten&iacute;a que ir a Jerusal&eacute;n y sufrir muchas cosas a manos de los ancianos, de los jefes de los sacerdotes y de los maestros de la ley, y que era necesario que lo mataran y que al tercer d&iacute;a resucitara.<sup class="versenum">22&nbsp;</sup>Pedro lo llev&oacute; aparte y comenz&oacute; a reprenderlo:</p>

<p>&mdash;&iexcl;De ninguna manera, Se&ntilde;or! &iexcl;Esto no te suceder&aacute; jam&aacute;s!</p>

<p><sup class="versenum">23&nbsp;</sup>Jes&uacute;s se volvi&oacute; y le dijo a Pedro:</p>

<p>&mdash;&iexcl;Al&eacute;jate de m&iacute;, Satan&aacute;s! Quieres hacerme tropezar; no piensas en las cosas de Dios, sino en las de los hombres.</p>

<p><sup class="versenum">24&nbsp;</sup>Luego dijo Jes&uacute;s a sus disc&iacute;pulos:</p>

<p>&mdash;Si alguien quiere ser mi disc&iacute;pulo, tiene que negarse a s&iacute; mismo, tomar su cruz y seguirme.<sup class="versenum">25&nbsp;</sup>Porque el que quiera salvar su vida, la perder&aacute;; pero el que pierda su vida por mi causa, la encontrar&aacute;.<sup class="versenum">26&nbsp;</sup>&iquest;De qu&eacute; sirve ganar el mundo entero si se pierde la vida? &iquest;O qu&eacute; se puede dar a cambio de la vida?<sup class="versenum">27&nbsp;</sup>Porque el Hijo del hombre ha de venir en la gloria de su Padre con sus &aacute;ngeles, y entonces recompensar&aacute; a cada persona seg&uacute;n lo que haya hecho.<sup class="versenum">28&nbsp;</sup>Les aseguro que algunos de los aqu&iacute; presentes no sufrir&aacute;n la muerte sin antes haber visto al Hijo del hombre llegar en su reino.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/239.mp4" type="button" class="external-movie">
         Mira Mateo 16:13-28</button>
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

<p class="up">Jes&uacute;s contin&uacute;a preparando a Su equipo de liderazgo para la misi&oacute;n. &Eacute;l les est&aacute; ense&ntilde;ando sobre el amor, la humildad, la fe y su comprensi&oacute;n de la autoridad. Ahora los lleva al norte a otra zona pagana no jud&iacute;a. Jes&uacute;s comienza a evaluar el ministerio preguntando &quot;&iquest;Qui&eacute;n dice la gente que soy?&quot; La pregunta es sobre el tema central del movimiento. Es la pregunta m&aacute;s importante que podemos hacernos a nosotros mismos y a los dem&aacute;s. Despu&eacute;s de casi tres a&ntilde;os de ministerio p&uacute;blico y mostrando se&ntilde;ales que lo se&ntilde;alaban como Mes&iacute;as, la gente todav&iacute;a no entend&iacute;a. Jes&uacute;s entonces pregunt&oacute; a los Doce c&oacute;mo responder&iacute;an a la pregunta. Pedro respondi&oacute; por el grupo: &quot;T&uacute; eres el Cristo, el Hijo del Dios Viviente&quot;. &iexcl;Lo consiguieron! Jes&uacute;s usa la oportunidad para recordarles que cualquier cosa que entendamos acerca de Jes&uacute;s viene del Padre y no de nuestro propio intelecto. Esta es tambi&eacute;n la primera vez que Jes&uacute;s menciona Su &#39;Iglesia&#39; que &Eacute;l promete construir sobre la verdad fundacional de qui&eacute;n es &Eacute;l. Fue en ese territorio pagano que Jes&uacute;s eligi&oacute; declarar por primera vez este plan. &iexcl;Imag&iacute;nese lo diferente que habr&iacute;a sido su comprensi&oacute;n si hubiera hecho esa misma declaraci&oacute;n en el Templo de Jerusal&eacute;n!</p>

<ul>
	<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Marcos 8:27-38</span>;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>La confesi&oacute;n de Pedro</h3>

	<p><sup class="versenum">27&nbsp;</sup>Jes&uacute;s y sus disc&iacute;pulos salieron hacia las aldeas de Cesarea de Filipo. En el camino les pregunt&oacute;:</p>

	<p>&mdash;&iquest;Qui&eacute;n dice la gente que soy yo?</p>

	<p><sup class="versenum">28&nbsp;</sup>&mdash;Unos dicen que Juan el Bautista, otros que El&iacute;as, y otros que uno de los profetas &mdash;contestaron.</p>

	<p><sup class="versenum">29&nbsp;</sup>&mdash;Y ustedes, &iquest;qui&eacute;n dicen que soy yo?</p>

	<p>&mdash;T&uacute; eres el Cristo &mdash;afirm&oacute; Pedro.</p>

	<p><sup class="versenum">30&nbsp;</sup>Jes&uacute;s les orden&oacute; que no hablaran a nadie acerca de &eacute;l.</p>

	<p><sup class="versenum">31&nbsp;</sup>Luego comenz&oacute; a ense&ntilde;arles:</p>

	<p>&mdash;El Hijo del hombre tiene que sufrir muchas cosas y ser rechazado por los ancianos, por los jefes de los sacerdotes y por los maestros de la ley. Es necesario que lo maten y que a los tres d&iacute;as resucite.</p>

	<p><sup class="versenum">32&nbsp;</sup>Habl&oacute; de esto con toda claridad. Pedro lo llev&oacute; aparte y comenz&oacute; a reprenderlo.<sup class="versenum">33&nbsp;</sup>Pero Jes&uacute;s se dio la vuelta, mir&oacute; a sus disc&iacute;pulos, y reprendi&oacute; a Pedro.</p>

	<p>&mdash;&iexcl;Al&eacute;jate de m&iacute;, Satan&aacute;s! &mdash;le dijo&mdash;. T&uacute; no piensas en las cosas de Dios, sino en las de los hombres.</p>

	<p><sup class="versenum">34&nbsp;</sup>Entonces llam&oacute; a la multitud y a sus disc&iacute;pulos.</p>

	<p>&mdash;Si alguien quiere ser mi disc&iacute;pulo &mdash;les dijo&mdash;, que se niegue a s&iacute; mismo, lleve su cruz y me siga.<sup class="versenum">35&nbsp;</sup>Porque el que quiera salvar su vida la perder&aacute;; pero el que pierda su vida por mi causa y por el evangelio la salvar&aacute;.<sup class="versenum">36&nbsp;</sup>&iquest;De qu&eacute; sirve ganar el mundo entero si se pierde la vida?<sup class="versenum">37&nbsp;</sup>&iquest;O qu&eacute; se puede dar a cambio de la vida?<sup class="versenum">38&nbsp;</sup>Si alguien se averg&uuml;enza de m&iacute; y de mis palabras en medio de esta generaci&oacute;n ad&uacute;ltera y pecadora, tambi&eacute;n el Hijo del hombre se avergonzar&aacute; de &eacute;l cuando venga en la gloria de su Padre con los santos &aacute;ngeles.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop4')"> Lucas 9:18-27</span>.

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">18&nbsp;</sup>Un d&iacute;a cuando Jes&uacute;s estaba orando para s&iacute;, estando all&iacute; sus disc&iacute;pulos, les pregunt&oacute;:</p>

	<p>&mdash;&iquest;Qui&eacute;n dice la gente que soy yo?</p>

	<p><sup class="versenum">19&nbsp;</sup>&mdash;Unos dicen que Juan el Bautista, otros que El&iacute;as, y otros que uno de los antiguos profetas ha resucitado &mdash;respondieron.</p>

	<p><sup class="versenum">20&nbsp;</sup>&mdash;Y ustedes, &iquest;qui&eacute;n dicen que soy yo?</p>

	<p>&mdash;El Cristo de Dios &mdash;afirm&oacute; Pedro.</p>

	<p><sup class="versenum">21&nbsp;</sup>Jes&uacute;s les orden&oacute; terminantemente que no dijeran esto a nadie. Y les dijo:</p>

	<p><sup class="versenum">22&nbsp;</sup>&mdash;El Hijo del hombre tiene que sufrir muchas cosas y ser rechazado por los ancianos, los jefes de los sacerdotes y los maestros de la ley. Es necesario que lo maten y que resucite al tercer d&iacute;a.</p>

	<p><sup class="versenum">23&nbsp;</sup>Dirigi&eacute;ndose a todos, declar&oacute;:</p>

	<p>&mdash;Si alguien quiere ser mi disc&iacute;pulo, que se niegue a s&iacute; mismo, lleve su cruz cada d&iacute;a y me siga.<sup class="versenum">24&nbsp;</sup>Porque el que quiera salvar su vida la perder&aacute;; pero el que pierda su vida por mi causa la salvar&aacute;.<sup class="versenum">25&nbsp;</sup>&iquest;De qu&eacute; le sirve a uno ganar el mundo entero si se pierde o se destruye a s&iacute; mismo?<sup class="versenum">26&nbsp;</sup>Si alguien se averg&uuml;enza de m&iacute; y de mis palabras, el Hijo del hombre se avergonzar&aacute; de &eacute;l cuando venga en su gloria y en la gloria del Padre y de los santos &aacute;ngeles.<sup class="versenum">27&nbsp;</sup>Adem&aacute;s, les aseguro que algunos de los aqu&iacute; presentes no sufrir&aacute;n la muerte sin antes haber visto el reino de Dios.</p>
	<!-- end bible --></div>

	<p>&nbsp;</p>

	<ul>
	</ul>

	<p>&nbsp;</p>
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

			<td class="social" @click="share('lesson', 'Retiro y evaluación de liderazgo: ', '/content/M2/spa/multiply2/multiply239.html')">
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