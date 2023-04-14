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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>Fe verdadera</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 4:43-54</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 4:43-54</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s sana al hijo de un funcionario</h3>

<p><sup class="versenum">43&nbsp;</sup>Despu&eacute;s de esos dos d&iacute;as Jes&uacute;s sali&oacute; de all&iacute; rumbo a Galilea<sup class="versenum">44&nbsp;</sup>(pues, como &eacute;l mismo hab&iacute;a dicho, a ning&uacute;n profeta se le honra en su propia tierra).<sup class="versenum">45&nbsp;</sup>Cuando lleg&oacute; a Galilea, fue bien recibido por los galileos, pues estos hab&iacute;an visto personalmente todo lo que hab&iacute;a hecho en Jerusal&eacute;n durante la fiesta de la Pascua, ya que ellos hab&iacute;an estado tambi&eacute;n all&iacute;.</p>

<p><sup class="versenum">46&nbsp;</sup>Y volvi&oacute; otra vez Jes&uacute;s a Can&aacute; de Galilea, donde hab&iacute;a convertido el agua en vino. Hab&iacute;a all&iacute; un funcionario real, cuyo hijo estaba enfermo en Caperna&uacute;m.<sup class="versenum">47&nbsp;</sup>Cuando este hombre se enter&oacute; de que Jes&uacute;s hab&iacute;a llegado de Judea a Galilea, fue a su encuentro y le suplic&oacute; que bajara a sanar a su hijo, pues estaba a punto de morir.</p>

<p><sup class="versenum">48&nbsp;</sup>&mdash;Ustedes nunca van a creer si no ven se&ntilde;ales y prodigios &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">49&nbsp;</sup>&mdash;Se&ntilde;or &mdash;rog&oacute; el funcionario&mdash;, baja antes de que se muera mi hijo.</p>

<p><sup class="versenum">50&nbsp;</sup>&mdash;Vuelve a casa, que tu hijo vive &mdash;le dijo Jes&uacute;s.</p>

<p>El hombre crey&oacute; lo que Jes&uacute;s le dijo, y se fue.<sup class="versenum">51&nbsp;</sup>Cuando se dirig&iacute;a a su casa, sus siervos salieron a su encuentro y le dieron la noticia de que su hijo estaba vivo.<sup class="versenum">52&nbsp;</sup>Cuando les pregunt&oacute; a qu&eacute; hora hab&iacute;a comenzado su hijo a sentirse mejor, le contestaron:</p>

<p>&mdash;Ayer a la una de la tarde se le quit&oacute; la fiebre.</p>

<p><sup class="versenum">53&nbsp;</sup>Entonces el padre se dio cuenta de que precisamente a esa hora Jes&uacute;s le hab&iacute;a dicho: &laquo;Tu hijo vive&raquo;. As&iacute; que crey&oacute; &eacute;l con toda su familia.</p>

<p><sup class="versenum">54&nbsp;</sup>Esta fue la segunda se&ntilde;al que hizo Jes&uacute;s despu&eacute;s de que volvi&oacute; de Judea a Galilea.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/214.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 4:43-54&nbsp;</button>
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
	<li class="nobreak-final-final">Jes&uacute;s viaja al norte a su ciudad natal de Nazaret en el distrito de Galilea. Los comentarios de su forma de reaccionar en el templo se hab&iacute;an extendido y toda la gente ten&iacute;a curiosidad acerca de &Eacute;l. Mientras Jes&uacute;s volv&iacute;a a visitar Can&aacute;, algunas de las noticias sobre &Eacute;l llegaron a un funcionario real desesperado en la gran ciudad de Cafarna&uacute;m. Este funcionario era muy probablemente un romano que esperaba que Jes&uacute;s pudiera sanar a su hijo. Hasta ahora, no hab&iacute;a registro de que Jes&uacute;s sanara a nadie, pero eso no impidi&oacute; que este hombre pusiera su fe en Jes&uacute;s. Cuando Jes&uacute;s prometi&oacute; que su hijo ya hab&iacute;a sido sanado, el funcionario real crey&oacute; y obedeci&oacute; a Jes&uacute;s. El resultado fue que su hijo fue sanado y toda su familia crey&oacute; y se salv&oacute;. La fe es tomar a Jes&uacute;s en Su palabra, creerle y luego actuar en obediencia. Estudio adicional: <span class="popup-link" @click = "popUp('pop3')"> Mateo 4:17</span>;&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>Desde entonces comenz&oacute; Jes&uacute;s a predicar: &laquo;Arrepi&eacute;ntanse, porque el reino de los cielos est&aacute; cerca&raquo;.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Marcos 1:14-15</span>;&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>Despu&eacute;s de que encarcelaron a Juan, Jes&uacute;s se fue a Galilea a anunciar las buenas nuevas de Dios.<sup class="versenum">15&nbsp;</sup>&laquo;Se ha cumplido el tiempo &mdash;dec&iacute;a&mdash;. El reino de Dios est&aacute; cerca. &iexcl;Arrepi&eacute;ntanse y crean las buenas nuevas!&raquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Lucas 4:14-15</span>.

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>Jes&uacute;s regres&oacute; a Galilea en el poder del Esp&iacute;ritu, y se extendi&oacute; su fama por toda aquella regi&oacute;n.<sup class="versenum">15&nbsp;</sup>Ense&ntilde;aba en las sinagogas, y todos lo admiraban.</p>
	</div>
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

			<td class="social" @click="share('lesson', 'Fe verdadera: ', '/content/M2/spa/multiply2/multiply214.html')">
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