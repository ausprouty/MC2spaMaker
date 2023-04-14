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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>Permaneciendo en Jesús</h1></div>
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
	<li class="nobreak-final-final">Ejemplo: Lea el <span class="popup-link" @click = "popUp('pop1')"> Salmos 16:7-11</span>

	<div class="popup nobreak-final-final" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">7&nbsp;</sup>Bendecir&eacute; al <span class="divine-name small-caps">Se&ntilde;or, que me aconseja;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;aun de noche me reprende mi conciencia.<br />
	<sup class="versenum">8&nbsp;</sup>Siempre tengo presente al <span class="divine-name small-caps">Se&ntilde;or;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;con &eacute;l a mi derecha, nada me har&aacute; caer.</span></span></p>
	</div>

	<p><sup class="versenum">9&nbsp;</sup>Por eso mi coraz&oacute;n se alegra,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y se regocijan mis entra&ntilde;as;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;todo mi ser se llena de confianza.<br />
	<sup class="versenum">10&nbsp;</sup>No dejar&aacute;s que mi vida termine en el sepulcro;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;no permitir&aacute;s que sufra corrupci&oacute;n tu siervo fiel.<br />
	<sup class="versenum">11&nbsp;</sup>Me has dado a conocer la senda de la vida;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;me llenar&aacute;s de alegr&iacute;a en tu presencia,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y de dicha eterna a tu derecha.</p>
	</div>
	<!-- end bible --></div>
	y ense&ntilde;e una nueva alabanza.</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

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
<p class="back"><em>Proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos.</em></p>

<p class="back">Ejemplo: Juan 16 nos ense&ntilde;a que el Esp&iacute;ritu Santo est&aacute; obrando activamente en los corazones de los que nos rodean. &Eacute;l les est&aacute; mostrando su pecado. &Eacute;l est&aacute; creando un deseo de estar de acuerdo con Dios. &Eacute;l est&aacute; creando un anhelo de evitar el miedo a la muerte, que es el juicio eterno. Est&aacute; derribando las objeciones de sus mentes y corazones. Nuestro trabajo es pesca esas personas a trav&eacute;s del testimonio, encontrando a aquellos cuyos corazones est&aacute;n listos. Anim&eacute;monos los unos a otros record&aacute;ndonos que el Esp&iacute;ritu ya est&aacute; obrando antes de que vayamos.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">La noche antes de que Jes&uacute;s fuera crucificado, cen&oacute; con sus 12 disc&iacute;pulos m&aacute;s cercanos. &Eacute;l les dijo que se iba, pero que iba a enviar al Consejero, el Esp&iacute;ritu Santo, para estar con ellos para siempre. &Eacute;l les ense&ntilde;a que a trav&eacute;s de la presencia del Esp&iacute;ritu Santo viviendo en ellos, &Eacute;l mismo estar&aacute; con ellos. Esta historia utiliza la imagen de una vid y sus ramas para describir c&oacute;mo deber&iacute;a ser nuestra relaci&oacute;n con Jes&uacute;s.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 15:1-11</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 15:1-11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s, la vid verdadera</h3>

<p><sup class="versenum">1 </sup>&raquo;Yo soy la vid verdadera, y mi Padre es el labrador.<sup class="versenum">2&nbsp;</sup>Toda rama que en m&iacute; no da fruto, la corta; pero toda rama que da fruto la poda para que d&eacute; m&aacute;s fruto todav&iacute;a.<sup class="versenum">3&nbsp;</sup>Ustedes ya est&aacute;n limpios por la palabra que les he comunicado.<sup class="versenum">4&nbsp;</sup>Permanezcan en m&iacute;, y yo permanecer&eacute; en ustedes. As&iacute; como ninguna rama puede dar fruto por s&iacute; misma, sino que tiene que permanecer en la vid, as&iacute; tampoco ustedes pueden dar fruto si no permanecen en m&iacute;.</p>

<p><sup class="versenum">5&nbsp;</sup>&raquo;Yo soy la vid y ustedes son las ramas. El que permanece en m&iacute;, como yo en &eacute;l, dar&aacute; mucho fruto; separados de m&iacute; no pueden ustedes hacer nada.<sup class="versenum">6&nbsp;</sup>El que no permanece en m&iacute; es desechado y se seca, como las ramas que se recogen, se arrojan al fuego y se queman.<sup class="versenum">7&nbsp;</sup>Si permanecen en m&iacute; y mis palabras permanecen en ustedes, pidan lo que quieran, y se les conceder&aacute;.<sup class="versenum">8&nbsp;</sup>Mi Padre es glorificado cuando ustedes dan mucho fruto y muestran as&iacute; que son mis disc&iacute;pulos.</p>

<p><sup class="versenum">9&nbsp;</sup>&raquo;As&iacute; como el Padre me ha amado a m&iacute;, tambi&eacute;n yo los he amado a ustedes. Permanezcan en mi amor.<sup class="versenum">10&nbsp;</sup>Si obedecen mis mandamientos, permanecer&aacute;n en mi amor, as&iacute; como yo he obedecido los mandamientos de mi Padre y permanezco en su amor.<sup class="versenum">11&nbsp;</sup>Les he dicho esto para que tengan mi alegr&iacute;a y as&iacute; su alegr&iacute;a sea completa.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/107.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 15:1-11&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento (Todos responden)</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n (o qu&eacute; te gust&oacute; m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendiste acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendiste sobre las personas?</li>
	<li>&iquest;C&oacute;mo obedecer&aacute;s a Jes&uacute;s ahora que sabes esto?</li>
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
<p class="up">Sin Jes&uacute;s, no podemos hacer nada. S&oacute;lo podemos tener una vida fruct&iacute;fera cuando dependemos de &Eacute;l y permanecemos en &Eacute;l. Esto sucede cuando nos sometemos en obediencia a Sus caminos, permitiendo que su vida fluya dentro y a trav&eacute;s de nosotros para que podamos dar fruto para la gloria de Dios. En otras palabras, necesitamos dejar que el Esp&iacute;ritu de Cristo, el Esp&iacute;ritu Santo, dirija y empodere nuestras vidas por fe.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Revise los principios de la respiraci&oacute;n espiritual del <!-- begin linkInternal capacitor-->
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/multiply1/multiply103', '#1')">
    EBF #3 &ldquo;Caminando en el Esp&iacute;ritu&quot;. 
</span>
<!-- end linkInternal capacitor-->
</li>
	<li>Practique cualquier habilidad o tema de lecciones anteriores seg&uacute;n sea necesario.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos a las que les que contar&aacute;s la historia o compartir&aacute;s el Evangelio esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo compartan con su grupo.</li>
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

<div class="for-enrichment">Para un mayor enriquecimiento: <!-- begin linkInternal capacitor-->
<span id= "Return2" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/tc/tc04', '#2')">
    Lea el concepto transferible #4: C&oacute;mo caminar en el Esp&iacute;ritu Santo? 
</span>
<!-- end linkInternal capacitor-->
, comparta lo aprendido con otro miembro del grupo.</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Permaneciendo en Jesús: ', '/content/M2/spa/multiply1/multiply107.html')">
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