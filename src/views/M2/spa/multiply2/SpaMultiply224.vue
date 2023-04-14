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
                        <div class="chapter_number ltr"><h1>24.</h1></div>
                        <div class="chapter_title ltr"><h1>Decir la verdad</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<p class="line"><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
<span class="indent-1-breaks">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="Phil-2-11 text">para gloria de Dios Padre.</span></p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad. <sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre, <sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
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
	<li class="back">Lea o vea <strong>Juan 5:1-17</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 5:1-17</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s sana a un inv&aacute;lido</h3>

<p><sup class="versenum">1 </sup>Alg&uacute;n tiempo despu&eacute;s, se celebraba una fiesta de los jud&iacute;os, y subi&oacute; Jes&uacute;s a Jerusal&eacute;n.<sup class="versenum">2&nbsp;</sup>Hab&iacute;a all&iacute;, junto a la puerta de las Ovejas, un estanque rodeado de cinco p&oacute;rticos, cuyo nombre en arameo es Betzat&aacute;.<sup class="versenum">3&nbsp;</sup>En esos p&oacute;rticos se hallaban tendidos muchos enfermos, ciegos, cojos y paral&iacute;ticos.<sup class="versenum">5&nbsp;</sup>Entre ellos se encontraba un hombre inv&aacute;lido que llevaba enfermo treinta y ocho a&ntilde;os.<sup class="versenum">6&nbsp;</sup>Cuando Jes&uacute;s lo vio all&iacute;, tirado en el suelo, y se enter&oacute; de que ya ten&iacute;a mucho tiempo de estar as&iacute;, le pregunt&oacute;:</p>

<p>&mdash;&iquest;Quieres quedar sano?</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;Se&ntilde;or &mdash;respondi&oacute;&mdash;, no tengo a nadie que me meta en el estanque mientras se agita el agua y, cuando trato de hacerlo, otro se mete antes.</p>

<p><sup class="versenum">8&nbsp;</sup>&mdash;Lev&aacute;ntate, recoge tu camilla y anda &mdash;le contest&oacute; Jes&uacute;s.</p>

<p><sup class="versenum">9&nbsp;</sup>Al instante aquel hombre qued&oacute; sano, as&iacute; que tom&oacute; su camilla y ech&oacute; a andar. Pero ese d&iacute;a era s&aacute;bado.<sup class="versenum">10&nbsp;</sup>Por eso los jud&iacute;os le dijeron al que hab&iacute;a sido sanado:</p>

<p>&mdash;Hoy es s&aacute;bado; no te est&aacute; permitido cargar tu camilla.</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;El que me san&oacute; me dijo: &ldquo;Recoge tu camilla y anda&rdquo; &mdash;les respondi&oacute;.</p>

<p><sup class="versenum">12&nbsp;</sup>&mdash;&iquest;Qui&eacute;n es ese hombre que te dijo: &ldquo;Rec&oacute;gela y anda&rdquo;? &mdash;le interpelaron.</p>

<p><sup class="versenum">13&nbsp;</sup>El que hab&iacute;a sido sanado no ten&iacute;a idea de qui&eacute;n era, porque Jes&uacute;s se hab&iacute;a escabullido entre la mucha gente que hab&iacute;a en el lugar.</p>

<p><sup class="versenum">14&nbsp;</sup>Despu&eacute;s de esto Jes&uacute;s lo encontr&oacute; en el templo y le dijo:</p>

<p>&mdash;Mira, ya has quedado sano. No vuelvas a pecar, no sea que te ocurra algo peor.</p>

<p><sup class="versenum">15&nbsp;</sup>El hombre se fue e inform&oacute; a los jud&iacute;os que Jes&uacute;s era quien lo hab&iacute;a sanado.</p>

<h3>Vida mediante el Hijo</h3>

<p><sup class="versenum">16&nbsp;</sup>Precisamente por esto los jud&iacute;os persegu&iacute;an a Jes&uacute;s, pues hac&iacute;a tales cosas en s&aacute;bado.<sup class="versenum">17&nbsp;</sup>Pero Jes&uacute;s les respond&iacute;a:</p>

<p>&mdash;Mi Padre a&uacute;n hoy est&aacute; trabajando, y yo tambi&eacute;n trabajo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/224.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 5:1-17&nbsp;</button>
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

<p class="up">Jes&uacute;s hace otro largo viaje a Jerusal&eacute;n para una fiesta. Su &uacute;ltimo viaje a Jerusal&eacute;n para una fiesta caus&oacute; una gran conmoci&oacute;n. Lo mismo volvi&oacute; a suceder. Esta vez el Padre llev&oacute; a Jes&uacute;s a una piscina justo fuera de una de las puertas de la ciudad, llamada la Puerta de las Ovejas. Aqu&iacute; hab&iacute;a muchas personas enfermas que se encuentran alrededor de la piscina. Jes&uacute;s s&oacute;lo san&oacute; a quien el Padre lo incit&oacute;. Debido a que esto se hizo en un d&iacute;a de reposo, los l&iacute;deres religiosos estaban muy molestos y persiguieron a Jes&uacute;s. Jes&uacute;s aprovech&oacute; la oportunidad para revelar Su relaci&oacute;n &uacute;nica con el Padre. Jes&uacute;s estaba diciendo la verdad de que &eacute;l es Dios. Los jud&iacute;os entendieron claramente que Jes&uacute;s afirmaba ser igual a Dios y a partir de este momento, buscan una manera de matarlo.</p>

<ul>
</ul>

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

			<td class="social" @click="share('lesson', 'Decir la verdad: ', '/content/M2/spa/multiply2/multiply224.html')">
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