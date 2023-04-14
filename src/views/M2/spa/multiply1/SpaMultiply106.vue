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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>Hablar con Dios</h1></div>
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
	<li class="back">Ejemplo: Lee el Salmo 100:2 &quot;Adoren al Se&ntilde;or con regocijo, pres&eacute;ntense ante &Eacute;l, con c&aacute;nticos de j&uacute;bilo&quot; Vamos a aprender una canci&oacute;n que podamos cantar para adorar al Se&ntilde;or.</li>
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

<p class="back">Ejemplo: Cuando Jes&uacute;s pas&oacute; por todas las ciudades y pueblos, vio las necesidades de la gente y tuvo compasi&oacute;n de ellas. &Eacute;l dijo a sus disc&iacute;pulos, &quot;La cosecha es abundante, pero son pocos los obreros. P&iacute;danle, por tanto, al Se&ntilde;or de la cosecha que env&iacute;e obreros a su campo&quot;. Dios quiere que todas las personas lo conozcan a &eacute;l y a su amor. &Eacute;l quiere utilizarnos y tambi&eacute;n levantar&aacute; m&aacute;s obreros de la mies que cosecharemos. Sigamos pidiendo a Dios que env&iacute;e m&aacute;s obreros para llevar a la gente a conocerlo.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">A pesar de que Jes&uacute;s era ocupado en el ministerio, pas&oacute; mucho tiempo hablando con el Padre. Mientras sus seguidores lo observaban, ellos tambi&eacute;n quer&iacute;an aprender a hablar con el Padre. Hoy aprenderemos lo que les dijo.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 11:1-13</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 11:1-13</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>Jes&uacute;s ense&ntilde;a sobre la oraci&oacute;n</h3>

<p><sup class="versenum">1 </sup>Un d&iacute;a estaba Jes&uacute;s orando en cierto lugar. Cuando termin&oacute;, le dijo uno de sus disc&iacute;pulos:</p>

<p>&mdash;Se&ntilde;or, ens&eacute;&ntilde;anos a orar, as&iacute; como Juan ense&ntilde;&oacute; a sus disc&iacute;pulos.</p>

<p><sup class="versenum">2&nbsp;</sup>&Eacute;l les dijo:</p>

<p>&mdash;Cuando oren, digan:</p>

<p>&raquo;&ldquo;Padre,<br />
santificado sea tu nombre.<br />
Venga tu reino.<br />
<sup class="versenum">3&nbsp;</sup>Danos cada d&iacute;a nuestro pan cotidiano.<br />
<sup class="versenum">4&nbsp;</sup>Perd&oacute;nanos nuestros pecados,<br />
&nbsp;&nbsp;&nbsp;&nbsp;porque tambi&eacute;n nosotros perdonamos a todos los que nos ofenden.<br />
Y no nos metas en tentaci&oacute;n&rdquo;.</p>
</div>

<p><sup class="versenum">5&nbsp;</sup>&raquo;Supongamos &mdash;continu&oacute;&mdash; que uno de ustedes tiene un amigo, y a medianoche va y le dice: &ldquo;Amigo, pr&eacute;stame tres panes,<sup class="versenum">6&nbsp;</sup>pues se me ha presentado un amigo reci&eacute;n llegado de viaje, y no tengo nada que ofrecerle&rdquo;.<sup class="versenum">7&nbsp;</sup>Y el que est&aacute; adentro le contesta: &ldquo;No me molestes. Ya est&aacute; cerrada la puerta, y mis hijos y yo estamos acostados. No puedo levantarme a darte nada&rdquo;.<sup class="versenum">8&nbsp;</sup>Les digo que, aunque no se levante a darle pan por ser amigo suyo, s&iacute; se levantar&aacute; por su impertinencia y le dar&aacute; cuanto necesite.</p>

<p><sup class="versenum">9&nbsp;</sup>&raquo;As&iacute; que yo les digo: Pidan, y se les dar&aacute;; busquen, y encontrar&aacute;n; llamen, y se les abrir&aacute; la puerta.<sup class="versenum">10&nbsp;</sup>Porque todo el que pide recibe; el que busca encuentra; y al que llama, se le abre.</p>

<p><sup class="versenum">11&nbsp;</sup>&raquo;&iquest;Qui&eacute;n de ustedes que sea padre, si su hijo le pide un pescado, le dar&aacute; en cambio una serpiente?<sup class="versenum">12&nbsp;</sup>&iquest;O, si le pide un huevo, le dar&aacute; un escorpi&oacute;n?<sup class="versenum">13&nbsp;</sup>Pues, si ustedes, aun siendo malos, saben dar cosas buenas a sus hijos, &iexcl;cu&aacute;nto m&aacute;s el Padre celestial dar&aacute; el Esp&iacute;ritu Santo a quienes se lo pidan!&raquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/106.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 11:1-13&nbsp;</button>
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
<p class="up">La oraci&oacute;n es simplemente hablar con nuestro Padre celestial. Podemos usar estos 4 puntos para resumir lo que Jes&uacute;s ense&ntilde;&oacute;:</p>

<ol>
	<li class="up">Alabarlo y mantenerlo como centro;</li>
	<li class="up">Pide lo que necesites de &Eacute;l;</li>
	<li class="up">Reconoce tus pecados;</li>
	<li class="up">Cede tu vida a Su voluntad y a Su Reino.</li>
</ol>

<p class="up">Podemos estar seguros de que &Eacute;l nos escucha y que Su coraz&oacute;n es darnos cosas buenas.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practica la oraci&oacute;n usando los 4 puntos del resumen.</li>
	<li>Practique compartir el Evangelio, acerca del Esp&iacute;ritu Santo, el estudio de la Biblia o cualquier lecci&oacute;n anterior</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos a las que les que contar&aacute;s la historia o compartir&aacute;s el Evangelio esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo;y que lo compartan con su grupo.</li>
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
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/tc/tc09', '#1')">
    Lea el concepto transferible #9: C&oacute;mo puede usted orar con confianza? 
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

			<td class="social" @click="share('lesson', 'Hablar con Dios: ', '/content/M2/spa/multiply1/multiply106.html')">
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