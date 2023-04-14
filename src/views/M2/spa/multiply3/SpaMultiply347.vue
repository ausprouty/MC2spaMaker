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
                        <div class="chapter_number ltr"><h1>47.</h1></div>
                        <div class="chapter_title ltr"><h1>El complot para matar a Pablo</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (Filipenses 2:11b; 1 Timoteo 2:4-6a)</p>

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
	<li class="back">Lea o vea <strong>Hechos 23:12-35</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 23:12-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Conspiraci&oacute;n para matar a Pablo</h3>

<p><sup class="versenum">12&nbsp;</sup>Muy de ma&ntilde;ana los jud&iacute;os tramaron una conspiraci&oacute;n y juraron bajo maldici&oacute;n no comer ni beber hasta que lograran matar a Pablo.<sup class="versenum">13&nbsp;</sup>M&aacute;s de cuarenta hombres estaban implicados en esta conspiraci&oacute;n.<sup class="versenum">14&nbsp;</sup>Se presentaron ante los jefes de los sacerdotes y los ancianos, y les dijeron:</p>

<p>&mdash;Nosotros hemos jurado bajo maldici&oacute;n no comer nada hasta que logremos matar a Pablo.<sup class="versenum">15&nbsp;</sup>Ahora, con el respaldo del Consejo, p&iacute;danle al comandante que haga comparecer al reo ante ustedes, con el pretexto de obtener informaci&oacute;n m&aacute;s precisa sobre su caso. Nosotros estaremos listos para matarlo en el camino.</p>

<p><sup class="versenum">16&nbsp;</sup>Pero, cuando el hijo de la hermana de Pablo se enter&oacute; de esta emboscada, entr&oacute; en el cuartel y avis&oacute; a Pablo.<sup class="versenum">17&nbsp;</sup>Este llam&oacute; entonces a uno de los centuriones y le pidi&oacute;:</p>

<p>&mdash;Lleve a este joven al comandante, porque tiene algo que decirle.</p>

<p><sup class="versenum">18&nbsp;</sup>As&iacute; que el centuri&oacute;n lo llev&oacute; al comandante, y le dijo:</p>

<p>&mdash;El preso Pablo me llam&oacute; y me pidi&oacute; que le trajera este joven, porque tiene algo que decirle.</p>

<p><sup class="versenum">19&nbsp;</sup>El comandante tom&oacute; de la mano al joven, lo llev&oacute; aparte y le pregunt&oacute;:</p>

<p>&mdash;&iquest;Qu&eacute; quieres decirme?</p>

<p><sup class="versenum">20&nbsp;</sup>&mdash;Los jud&iacute;os se han puesto de acuerdo para pedirle a usted que ma&ntilde;ana lleve a Pablo ante el Consejo con el pretexto de obtener informaci&oacute;n m&aacute;s precisa acerca de &eacute;l.<sup class="versenum">21&nbsp;</sup>No se deje convencer, porque m&aacute;s de cuarenta de ellos lo esperan emboscados. Han jurado bajo maldici&oacute;n no comer ni beber hasta que hayan logrado matarlo. Ya est&aacute;n listos; solo aguardan a que usted les conceda su petici&oacute;n.</p>

<p><sup class="versenum">22&nbsp;</sup>El comandante despidi&oacute; al joven con esta advertencia:</p>

<p>&mdash;No le digas a nadie que me has informado de esto.</p>

<h3>Trasladan a Pablo a Cesarea</h3>

<p><sup class="versenum">23&nbsp;</sup>Entonces el comandante llam&oacute; a dos de sus centuriones y les orden&oacute;:</p>

<p>&mdash;Alisten un destacamento de doscientos soldados de infanter&iacute;a, setenta de caballer&iacute;a y doscientos lanceros para que vayan a Cesarea esta noche a las nueve.<sup class="versenum">24&nbsp;</sup>Y preparen cabalgaduras para llevar a Pablo sano y salvo al gobernador F&eacute;lix.</p>

<p><sup class="versenum">25&nbsp;</sup>Adem&aacute;s, escribi&oacute; una carta en estos t&eacute;rminos:</p>

<p><sup class="versenum">26&nbsp;</sup>Claudio Lisias,</p>

<p>a su excelencia el gobernador F&eacute;lix:</p>

<p>Saludos.</p>

<p><sup class="versenum">27&nbsp;</sup>Los jud&iacute;os prendieron a este hombre y estaban a punto de matarlo, pero yo llegu&eacute; con mis soldados y lo rescat&eacute;, porque me hab&iacute;a enterado de que es ciudadano romano.<sup class="versenum">28&nbsp;</sup>Yo quer&iacute;a saber de qu&eacute; lo acusaban, as&iacute; que lo llev&eacute; al Consejo jud&iacute;o.<sup class="versenum">29&nbsp;</sup>Descubr&iacute; que lo acusaban de algunas cuestiones de su ley, pero no hab&iacute;a contra &eacute;l cargo alguno que mereciera la muerte o la c&aacute;rcel.<sup class="versenum">30&nbsp;</sup>Cuando me informaron que se tramaba una conspiraci&oacute;n contra este hombre, decid&iacute; enviarlo a usted en seguida. Tambi&eacute;n les orden&eacute; a sus acusadores que expongan delante de usted los cargos que tengan contra &eacute;l.</p>

<p><sup class="versenum">31&nbsp;</sup>As&iacute; que los soldados, seg&uacute;n se les hab&iacute;a ordenado, tomaron a Pablo y lo llevaron de noche hasta Ant&iacute;patris.<sup class="versenum">32&nbsp;</sup>Al d&iacute;a siguiente dejaron que la caballer&iacute;a siguiera con &eacute;l mientras ellos volv&iacute;an al cuartel.<sup class="versenum">33&nbsp;</sup>Cuando la caballer&iacute;a lleg&oacute; a Cesarea, le entregaron la carta al gobernador y le presentaron tambi&eacute;n a Pablo.<sup class="versenum">34&nbsp;</sup>F&eacute;lix ley&oacute; la carta y pregunt&oacute; de qu&eacute; provincia era. Al enterarse de que Pablo era de Cilicia,<sup class="versenum">35&nbsp;</sup>le dijo: &laquo;Te dar&eacute; audiencia cuando lleguen tus acusadores&raquo;. Y orden&oacute; que lo dejaran bajo custodia en el palacio de Herodes.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/347.mp4" type="button" class="external-movie">
         Mira Hechos 23:12-35</button>
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
<p class="up">Durante toda la vida cristiana de Pablo, los jud&iacute;os que rechazaron a Jes&uacute;s tambi&eacute;n lo rechazaron a &eacute;l y al Evangelio. Se nos recuerda la ense&ntilde;anza de Jes&uacute;s, &quot;si os rechazan, me rechazan a m&iacute;, y al que me envi&oacute;&quot; (Lucas 10:16). Los jud&iacute;os ve&iacute;an a Pablo como un blasfemo y su mensaje como una amenaza a su propia visi&oacute;n nacionalista interesada del prop&oacute;sito de Dios. Vemos la soberan&iacute;a de Dios a trav&eacute;s del uso del sobrino de Pablo aprendiendo sobre el complot para asesinarlo. En respuesta, el comandante envi&oacute; 470 tropas romanas para transportar a Pablo a salvo los 112 km (70 millas) a la ciudad costera de Cesarea. El Gobernador F&eacute;lix lo mantuvo bajo guardia en el palacio de verano del exrey Herodes el Grande (Mateo 2:1; Lucas 1:5). Este ejemplo de la vida de Pablo nos muestra que el Se&ntilde;or est&aacute; con aquellos que persiguen su prop&oacute;sito del Reino y que el lugar m&aacute;s seguro para estar es en la voluntad del Padre.</p>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

</div>

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

			<td class="social" @click="share('lesson', 'El complot para matar a Pablo: ', '/content/M2/spa/multiply3/multiply347.html')">
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