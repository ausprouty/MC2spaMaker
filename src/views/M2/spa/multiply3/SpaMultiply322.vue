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
                        <div class="chapter_number ltr"><h1>22.</h1></div>
                        <div class="chapter_title ltr"><h1>La Iglesia en Antioquía de Siria</h1></div>
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
<ul><li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
</div>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
</div>

</li></ul>


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
	<li class="back">Lea o vea <strong>Hechos 11:19-30</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 11:19-30</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La iglesia en Antioqu&iacute;a</h3>

<p><sup class="versenum">19&nbsp;</sup>Los que se hab&iacute;an dispersado a causa de la persecuci&oacute;n que se desat&oacute; por el caso de Esteban llegaron hasta Fenicia, Chipre y Antioqu&iacute;a, sin anunciar a nadie el mensaje excepto a los jud&iacute;os.<sup class="versenum">20&nbsp;</sup>Sin embargo, hab&iacute;a entre ellos algunas personas de Chipre y de Cirene que, al llegar a Antioqu&iacute;a, comenzaron a hablarles tambi&eacute;n a los de habla griega, anunci&aacute;ndoles las buenas nuevas acerca del Se&ntilde;or Jes&uacute;s.<sup class="versenum">21&nbsp;</sup>El poder del Se&ntilde;or estaba con ellos, y un gran n&uacute;mero crey&oacute; y se convirti&oacute; al Se&ntilde;or.</p>

<p><sup class="versenum">22&nbsp;</sup>La noticia de estos sucesos lleg&oacute; a o&iacute;dos de la iglesia de Jerusal&eacute;n, y mandaron a Bernab&eacute; a Antioqu&iacute;a.<sup class="versenum">23&nbsp;</sup>Cuando &eacute;l lleg&oacute; y vio las evidencias de la gracia de Dios, se alegr&oacute; y anim&oacute; a todos a hacerse el firme prop&oacute;sito de permanecer fieles al Se&ntilde;or,<sup class="versenum">24&nbsp;</sup>pues era un hombre bueno, lleno del Esp&iacute;ritu Santo y de fe. Un gran n&uacute;mero de personas acept&oacute; al Se&ntilde;or.</p>

<p><sup class="versenum">25&nbsp;</sup>Despu&eacute;s parti&oacute; Bernab&eacute; para Tarso en busca de Saulo,<sup class="versenum">26&nbsp;</sup>y, cuando lo encontr&oacute;, lo llev&oacute; a Antioqu&iacute;a. Durante todo un a&ntilde;o se reunieron los dos con la iglesia y ense&ntilde;aron a mucha gente. Fue en Antioqu&iacute;a donde a los disc&iacute;pulos se les llam&oacute; &laquo;cristianos&raquo; por primera vez.</p>

<p><sup class="versenum">27&nbsp;</sup>Por aquel tiempo unos profetas bajaron de Jerusal&eacute;n a Antioqu&iacute;a.<sup class="versenum">28&nbsp;</sup>Uno de ellos, llamado &Aacute;gabo, se puso de pie y predijo por medio del Esp&iacute;ritu que iba a haber una gran hambre en todo el mundo, lo cual sucedi&oacute; durante el reinado de Claudio.<sup class="versenum">29&nbsp;</sup>Entonces decidieron que cada uno de los disc&iacute;pulos, seg&uacute;n los recursos de cada cual, enviar&iacute;a ayuda a los hermanos que viv&iacute;an en Judea.<sup class="versenum">30&nbsp;</sup>As&iacute; lo hicieron, mandando su ofrenda a los ancianos por medio de Bernab&eacute; y de Saulo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/322.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 11:19-30&nbsp;</button>
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
<!-- end default revealSummary --><ul>
<li class="nobreak-final-final">Nuestras historias pasadas se han centrado en Pedro, pero &eacute;l no era el &uacute;nico creyente que estaba activo durante este tiempo. Los creyentes que huyeron de Jerusal&eacute;n durante la persecuci&oacute;n de Saulo (<span class="popup-link" @click = "popUp('pop3')"> Hechos 8:1</span>) 

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Y Saulo estaba all&iacute;, aprobando la muerte de Esteban.</p>

<p>Aquel d&iacute;a se desat&oacute; una gran persecuci&oacute;n contra la iglesia en Jerusal&eacute;n, y todos, excepto los ap&oacute;stoles, se dispersaron por las regiones de Judea y Samaria.</p>
<!-- end bible --></div>
 tambi&eacute;n estaban compartiendo su fe, pero s&oacute;lo con otros jud&iacute;os. Sin embargo, algunos de los jud&iacute;os de habla griega de la isla de Chipre y el &aacute;rea del norte de &Aacute;frica llamada Cirene (actual Libia) compartieron con personas no jud&iacute;as en la gran ciudad multicultural de Antioqu&iacute;a en Siria. Un gran n&uacute;mero se volvi&oacute; al Se&ntilde;or y comenz&oacute; una iglesia en Antioqu&iacute;a. Esta fue una iglesia de 2da. generaci&oacute;n iniciada por creyentes comunes. Bernab&eacute;, que era originario de Chipre, fue enviado por la iglesia de Jerusal&eacute;n para validar lo que estaba ocurriendo. Reconoci&oacute; que el Se&ntilde;or estaba obrando y se dio cuenta de que Saulo era el perfecto para ayudar a establecer esta joven iglesia gentil. Es en Antioqu&iacute;a que el nombre cristiano se utiliza por primera vez para describir a los disc&iacute;pulos de Jes&uacute;s. Los creyentes gentiles mostraron su conexi&oacute;n con los creyentes jud&iacute;os enviando generosamente ayuda financiera a la iglesia de Jerusal&eacute;n.

</li></ul>



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

			<td class="social" @click="share('lesson', 'La Iglesia en Antioquía de Siria: ', '/content/M2/spa/multiply3/multiply322.html')">
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