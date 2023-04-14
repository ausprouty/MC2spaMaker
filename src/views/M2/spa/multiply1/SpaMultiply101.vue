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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>Seguridad de Salvación</h1></div>
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
<p class="back"><em>Lee un pasaje de las Escrituras para comenzar a sentar las bases de la adoraci&oacute;n y la alabanza</em>.</p>

<ul>
	<li class="back">Lee el Salmo 118:28 &quot;Mi Dios eres t&uacute;, y te alabar&eacute;&rdquo;. &iquest;Cuales son algunos motivos o razones por las que hoy quieras agradecer o alabar a Dios?</li>
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

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">Ejemplo: &iexcl;Dios ama a las personas! La Biblia nos dice que el deseo de Dios es que todas las personas sean salvas y lleguen a entender la verdad (<span class="popup-link" @click = "popUp('pop1')"> 1 Timoteo 2:4</span>).&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.</p>
	<!-- end bible --></div>
	El Evangelio no es s&oacute;lo para ti, sino para todos tus amigos y familiares. Dios los ama y te usar&aacute; para transmitir lo que t&uacute; est&aacute;s aprendiendo acerca de Jes&uacute;s para que ellos tambi&eacute;n puedan seguir a Jes&uacute;s. A medida que viajemos juntos, ser&aacute; emocionante ver lo que Dios har&aacute; en las vidas de los que nos rodean.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 10:22-30</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 10:22-30</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s y la fiesta de la Dedicaci&oacute;n</h3>

<p><sup class="versenum">22&nbsp;</sup>Por esos d&iacute;as se celebraba en Jerusal&eacute;n la fiesta de la Dedicaci&oacute;n. Era invierno,<sup class="versenum">23&nbsp;</sup>y Jes&uacute;s andaba en el templo, por el p&oacute;rtico de Salom&oacute;n.<sup class="versenum">24&nbsp;</sup>Entonces lo rodearon los jud&iacute;os y le preguntaron:</p>

<p>&mdash;&iquest;Hasta cu&aacute;ndo vas a tenernos en suspenso? Si t&uacute; eres el Cristo, d&iacute;noslo con franqueza.</p>

<p><sup class="versenum">25&nbsp;</sup>&mdash;Ya se lo he dicho a ustedes, y no lo creen. Las obras que hago en nombre de mi Padre son las que me acreditan,<sup class="versenum">26&nbsp;</sup>pero ustedes no creen porque no son de mi reba&ntilde;o.<sup class="versenum">27&nbsp;</sup>Mis ovejas oyen mi voz; yo las conozco y ellas me siguen.<sup class="versenum">28&nbsp;</sup>Yo les doy vida eterna, y nunca perecer&aacute;n, ni nadie podr&aacute; arrebat&aacute;rmelas de la mano.<sup class="versenum">29&nbsp;</sup>Mi Padre, que me las ha dado, es m&aacute;s grande que todos; y de la mano del Padre nadie las puede arrebatar.<sup class="versenum">30&nbsp;</sup>El Padre y yo somos uno.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/101.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 10:22-30&nbsp;</button>
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
<p class="up">En la cruz Jes&uacute;s, el buen pastor, dio su vida como un sacrificio por tus pecados. Como una de sus ovejas, &eacute;l quiere que sepas que tienes vida eterna y que nunca perecer&aacute;s. Est&aacute;s a salvo en sus manos y nadie, incluyendo a Satan&aacute;s mismo, puede arrebatarte. Lee la secci&oacute;n de &ldquo;C&oacute;mo sabes que Cristo est&aacute; en tu vida&rdquo; del folleto de las 4 leyes.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>P&iacute;dales que practiquen compartir el Evangelio</li>
	<li>Recu&eacute;rdeles qu&eacute; hacer cuando alguien dice S&Iacute; al Evangelio.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>P&iacute;dales que creen una Lista Oikos escribiendo los nombres de 10 o m&aacute;s personas que conocen en sus redes de relaciones.</li>
	<li>Identifica a 5 personas de tu Lista Oikos a las que les contar&aacute;s la historia o con las que compartir&aacute;s el Evangelio esta semana. (use la declaraci&oacute;n: &quot;Yo har&eacute;&hellip;&hellip;. cuando&hellip;&rdquo;).</li>
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
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/tc/tc01', '#1')">
    Lea el concepto transferible #1: C&oacute;mo puede estar seguro de conocer a Dios? 
</span>
<!-- end linkInternal capacitor-->
, comparta lo aprendido con otro miembro del grupo.</div>

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

			<td class="social" @click="share('lesson', 'Seguridad de Salvación: ', '/content/M2/spa/multiply1/multiply101.html')">
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