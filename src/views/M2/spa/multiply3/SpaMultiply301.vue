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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús asciende al cielo</h1></div>
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
<p class="back"><em>Lea un vers&iacute;culo B&iacute;blico y canten alabanzas a Dios.</em></p>

<ul>
	<li class="back">(opcional) Use una Declaraci&oacute;n de Fe acerca de Jes&uacute;s, como <span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>...&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos.&nbsp;</p>
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
<p class="back"><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li class="back">Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Explique que la vida de Cristo se divide en 5 per&iacute;odos:</p>

<ol>
	<li class="back">Preparaci&oacute;n</li>
	<li class="back">Fundamentos del Ministerio</li>
	<li class="back">Capacitaci&oacute;n ministerial</li>
	<li class="back">Alcance ampliado</li>
	<li class="back">Multiplicaci&oacute;n del liderazgo</li>
</ol>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 1:1-11</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 1:1-11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s llevado al cielo</h3>

<p><sup class="versenum">1 </sup>Estimado Te&oacute;filo, en mi primer libro me refer&iacute; a todo lo que Jes&uacute;s comenz&oacute; a hacer y ense&ntilde;ar<sup class="versenum">2&nbsp;</sup>hasta el d&iacute;a en que fue llevado al cielo, luego de darles instrucciones por medio del Esp&iacute;ritu Santo a los ap&oacute;stoles que hab&iacute;a escogido.<sup class="versenum">3&nbsp;</sup>Despu&eacute;s de padecer la muerte, se les present&oacute; d&aacute;ndoles muchas pruebas convincentes de que estaba vivo. Durante cuarenta d&iacute;as se les apareci&oacute; y les habl&oacute; acerca del reino de Dios.<sup class="versenum">4&nbsp;</sup>Una vez, mientras com&iacute;a con ellos, les orden&oacute;:</p>

<p>&mdash;No se alejen de Jerusal&eacute;n, sino esperen la promesa del Padre, de la cual les he hablado:<sup class="versenum">5&nbsp;</sup>Juan bautiz&oacute; con agua, pero dentro de pocos d&iacute;as ustedes ser&aacute;n bautizados con el Esp&iacute;ritu Santo.</p>

<p><sup class="versenum">6&nbsp;</sup>Entonces los que estaban reunidos con &eacute;l le preguntaron:</p>

<p>&mdash;Se&ntilde;or, &iquest;es ahora cuando vas a restablecer el reino a Israel?</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;No les toca a ustedes conocer la hora ni el momento determinados por la autoridad misma del Padre &mdash;les contest&oacute; Jes&uacute;s&mdash;.<sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</p>

<p><sup class="versenum">9&nbsp;</sup>Habiendo dicho esto, mientras ellos lo miraban, fue llevado a las alturas hasta que una nube lo ocult&oacute; de su vista.<sup class="versenum">10&nbsp;</sup>Ellos se quedaron mirando fijamente al cielo mientras &eacute;l se alejaba. De repente, se les acercaron dos hombres vestidos de blanco, que les dijeron:</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Galileos, &iquest;qu&eacute; hacen aqu&iacute; mirando al cielo? Este mismo Jes&uacute;s, que ha sido llevado de entre ustedes al cielo, vendr&aacute; otra vez de la misma manera que lo han visto irse.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/301.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 1:1-11&nbsp;</button>
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
<p class="up">La historia describe Hechos como la continuaci&oacute;n del ministerio de Jes&uacute;s. Lo que &Eacute;l comenz&oacute; en la tierra, &Eacute;l est&aacute; continuando desde el cielo a trav&eacute;s de Sus seguidores con poder del Esp&iacute;ritu. Antes de que Jes&uacute;s regrese al cielo, &Eacute;l da prueba de que &Eacute;l est&aacute; vivo y contin&uacute;a ense&ntilde;ando acerca de la naturaleza de Su Reino. Incluso despu&eacute;s de todos los acontecimientos que tuvieron lugar, los disc&iacute;pulos todav&iacute;a no entend&iacute;amos completamente el Reino y nos pregunt&aacute;bamos cu&aacute;ndo se restaurar&iacute;a el poder pol&iacute;tico a la naci&oacute;n de Israel. Jes&uacute;s ense&ntilde;&oacute; que el Reino se extender&aacute; a trav&eacute;s de los testigos y la obra del Esp&iacute;ritu, no por los soldados o por la violencia revolucionaria. Los disc&iacute;pulos ahora est&aacute;n siendo enviados como Jes&uacute;s, pero necesitan el poder del Esp&iacute;ritu para caminar como Jes&uacute;s camin&oacute;. Deben permanecer enfocados en la misi&oacute;n de hacer disc&iacute;pulos de todas las naciones hasta que Jes&uacute;s regrese f&iacute;sicamente de la misma manera que &Eacute;l se fue.</p>

<p class="up">Lee <span class="popup-link" @click = "popUp('pop3')"> Mateo 28:18-20</span>.&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">18&nbsp;</sup>Jes&uacute;s se acerc&oacute; entonces a ellos y les dijo:</p>

<p>&mdash;Se me ha dado toda autoridad en el cielo y en la tierra.<sup class="versenum">19&nbsp;</sup>Por tanto, vayan y hagan disc&iacute;pulos de todas las naciones, bautiz&aacute;ndolos en el nombre del Padre y del Hijo y del Esp&iacute;ritu Santo,<sup class="versenum">20&nbsp;</sup>ense&ntilde;&aacute;ndoles a obedecer todo lo que les he mandado a ustedes. Y les aseguro que estar&eacute; con ustedes siempre, hasta el fin del mundo.</p>
</div>

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

			<td class="social" @click="share('lesson', 'Jesús asciende al cielo: ', '/content/M2/spa/multiply3/multiply301.html')">
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