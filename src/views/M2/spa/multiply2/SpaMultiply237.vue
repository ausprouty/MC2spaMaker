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
                        <div class="chapter_number ltr"><h1>37.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo y miedo</h1></div>
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
	<li class="back">Lea o vea <strong>Mateo 14:22-33</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Mateo 14:22-33</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s camina sobre el agua</h3>

<p><sup class="versenum">22&nbsp;</sup>En seguida Jes&uacute;s hizo que los disc&iacute;pulos subieran a la barca y se le adelantaran al otro lado mientras &eacute;l desped&iacute;a a la multitud.<sup class="versenum">23&nbsp;</sup>Despu&eacute;s de despedir a la gente, subi&oacute; a la monta&ntilde;a para orar a solas. Al anochecer, estaba all&iacute; &eacute;l solo,<sup class="versenum">24&nbsp;</sup>y la barca ya estaba bastante lejos de la tierra, zarandeada por las olas, porque el viento le era contrario.</p>

<p><sup class="versenum">25&nbsp;</sup>En la madrugada, Jes&uacute;s se acerc&oacute; a ellos caminando sobre el lago.<sup class="versenum">26&nbsp;</sup>Cuando los disc&iacute;pulos lo vieron caminando sobre el agua, quedaron aterrados.</p>

<p>&mdash;&iexcl;Es un fantasma! &mdash;gritaron de miedo.</p>

<p><sup class="versenum">27&nbsp;</sup>Pero Jes&uacute;s les dijo en seguida:</p>

<p>&mdash;&iexcl;C&aacute;lmense! Soy yo. No tengan miedo.</p>

<p><sup class="versenum">28&nbsp;</sup>&mdash;Se&ntilde;or, si eres t&uacute; &mdash;respondi&oacute; Pedro&mdash;, m&aacute;ndame que vaya a ti sobre el agua.</p>

<p><sup class="versenum">29&nbsp;</sup>&mdash;Ven &mdash;dijo Jes&uacute;s.</p>

<p>Pedro baj&oacute; de la barca y camin&oacute; sobre el agua en direcci&oacute;n a Jes&uacute;s.<sup class="versenum">30&nbsp;</sup>Pero, al sentir el viento fuerte, tuvo miedo y comenz&oacute; a hundirse. Entonces grit&oacute;:</p>

<p>&mdash;&iexcl;Se&ntilde;or, s&aacute;lvame!</p>

<p><sup class="versenum">31&nbsp;</sup>En seguida Jes&uacute;s le tendi&oacute; la mano y, sujet&aacute;ndolo, lo reprendi&oacute;:</p>

<p>&mdash;&iexcl;Hombre de poca fe! &iquest;Por qu&eacute; dudaste?</p>

<p><sup class="versenum">32&nbsp;</sup>Cuando subieron a la barca, se calm&oacute; el viento.<sup class="versenum">33&nbsp;</sup>Y los que estaban en la barca lo adoraron diciendo:</p>

<p>&mdash;Verdaderamente t&uacute; eres el Hijo de Dios.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/237.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 14:22-33&nbsp;</button>
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
<p class="up">Jes&uacute;s hizo que sus disc&iacute;pulos salieron en el bote a cruzar el agua, mientras &eacute;l buscaba tiempo a solas con el Padre. Sorprendentemente, Intencionalmente los envi&oacute; a una tormenta y vio a sus l&iacute;deres luchar por un tiempo. Entonces Jes&uacute;s se uni&oacute; a los disc&iacute;pulos caminando sobre el agua hasta donde estaban. Cansados y asustados comenzaron a gritar &quot;&iexcl;Es un fantasma!&quot; Mientras Jes&uacute;s trata de consolarlos, Pedro muestra su fe audaz al querer ir con Jes&uacute;s en el agua. Pedro lo hizo bien hasta que quit&oacute; los ojos de Jes&uacute;s. Mientras Pedro clama por ser salvo, Jes&uacute;s inmediatamente lo rescata. Los doce ap&oacute;stoles sab&iacute;an que estaban en la presencia del Hijo de Dios y respondieron ador&aacute;ndolo.</p>
<ul>
<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Marcos 6:45-52</span>; 

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">45&nbsp;</sup>En seguida Jes&uacute;s hizo que sus disc&iacute;pulos subieran a la barca y se le adelantaran al otro lado, a Betsaida, mientras &eacute;l desped&iacute;a a la multitud.<sup class="versenum">46&nbsp;</sup>Cuando se despidi&oacute;, fue a la monta&ntilde;a para orar.</p>

<p><sup class="versenum">47&nbsp;</sup>Al anochecer, la barca se hallaba en medio del lago, y Jes&uacute;s estaba en tierra solo.<sup class="versenum">48&nbsp;</sup>En la madrugada, vio que los disc&iacute;pulos hac&iacute;an grandes esfuerzos para remar, pues ten&iacute;an el viento en contra. Se acerc&oacute; a ellos caminando sobre el lago, e iba a pasarlos de largo.<sup class="versenum">49&nbsp;</sup>Los disc&iacute;pulos, al verlo caminar sobre el agua, creyeron que era un fantasma y se pusieron a gritar,<sup class="versenum">50&nbsp;</sup>llenos de miedo por lo que ve&iacute;an. Pero &eacute;l habl&oacute; en seguida con ellos y les dijo: &laquo;&iexcl;C&aacute;lmense! Soy yo. No tengan miedo&raquo;.</p>

<p><sup class="versenum">51&nbsp;</sup>Subi&oacute; entonces a la barca con ellos, y el viento se calm&oacute;. Estaban sumamente asombrados,<sup class="versenum">52&nbsp;</sup>porque ten&iacute;an la mente embotada y no hab&iacute;an comprendido lo de los panes.</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> Juan 6:16-21</span>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">16&nbsp;</sup>Cuando ya anochec&iacute;a, sus disc&iacute;pulos bajaron al lago<sup class="versenum">17&nbsp;</sup>y subieron a una barca, y comenzaron a cruzar el lago en direcci&oacute;n a Caperna&uacute;m. Para entonces ya hab&iacute;a oscurecido, y Jes&uacute;s todav&iacute;a no se les hab&iacute;a unido.<sup class="versenum">18&nbsp;</sup>Por causa del fuerte viento que soplaba, el lago estaba picado.<sup class="versenum">19&nbsp;</sup>Habr&iacute;an remado unos cinco o seis kil&oacute;metros cuando vieron que Jes&uacute;s se acercaba a la barca, caminando sobre el agua, y se asustaron.<sup class="versenum">20&nbsp;</sup>Pero &eacute;l les dijo: &laquo;No tengan miedo, que soy yo&raquo;.<sup class="versenum">21&nbsp;</sup>As&iacute; que se dispusieron a recibirlo a bordo, y en seguida la barca lleg&oacute; a la orilla adonde se dirig&iacute;an.</p>
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

			<td class="social" @click="share('lesson', 'Liderazgo y miedo: ', '/content/M2/spa/multiply2/multiply237.html')">
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