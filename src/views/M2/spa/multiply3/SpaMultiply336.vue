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
                        <div class="chapter_number ltr"><h1>36.</h1></div>
                        <div class="chapter_title ltr"><h1>Plantación de iglesias en la capital de Acaya (Corinto)</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 18:1-22</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 18:1-22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>En Corinto</h3>

<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, Pablo se march&oacute; de Atenas y se fue a Corinto.<sup class="versenum">2&nbsp;</sup>All&iacute; se encontr&oacute; con un jud&iacute;o llamado Aquila, natural del Ponto, y con su esposa Priscila. Hac&iacute;a poco hab&iacute;an llegado de Italia, porque Claudio hab&iacute;a mandado que todos los jud&iacute;os fueran expulsados de Roma. Pablo fue a verlos<sup class="versenum">3&nbsp;</sup>y, como hac&iacute;a tiendas de campa&ntilde;a al igual que ellos, se qued&oacute; para que trabajaran juntos.<sup class="versenum">4&nbsp;</sup>Todos los s&aacute;bados discut&iacute;a en la sinagoga, tratando de persuadir a jud&iacute;os y a griegos.</p>

<p><sup class="versenum">5&nbsp;</sup>Cuando Silas y Timoteo llegaron de Macedonia, Pablo se dedic&oacute; exclusivamente a la predicaci&oacute;n, testific&aacute;ndoles a los jud&iacute;os que Jes&uacute;s era el Mes&iacute;as.<sup class="versenum">6&nbsp;</sup>Pero, cuando los jud&iacute;os se opusieron a Pablo y lo insultaron, este se sacudi&oacute; la ropa en se&ntilde;al de protesta y les dijo: &laquo;&iexcl;Caiga la sangre de ustedes sobre su propia cabeza! Estoy libre de responsabilidad. De ahora en adelante me dirigir&eacute; a los gentiles&raquo;.</p>

<p><sup class="versenum">7&nbsp;</sup>Entonces Pablo sali&oacute; de la sinagoga y se fue a la casa de un tal Ticio Justo, que adoraba a Dios y que viv&iacute;a al lado de la sinagoga.<sup class="versenum">8&nbsp;</sup>Crispo, el jefe de la sinagoga, crey&oacute; en el Se&ntilde;or con toda su familia. Tambi&eacute;n creyeron y fueron bautizados muchos de los corintios que oyeron a Pablo.</p>

<p><sup class="versenum">9&nbsp;</sup>Una noche el Se&ntilde;or le dijo a Pablo en una visi&oacute;n: &laquo;No tengas miedo; sigue hablando y no te calles,<sup class="versenum">10&nbsp;</sup>pues estoy contigo. Aunque te ataquen, no voy a dejar que nadie te haga da&ntilde;o, porque tengo mucha gente en esta ciudad&raquo;.<sup class="versenum">11&nbsp;</sup>As&iacute; que Pablo se qued&oacute; all&iacute; un a&ntilde;o y medio, ense&ntilde;ando entre el pueblo la palabra de Dios.</p>

<p><sup class="versenum">12&nbsp;</sup>Mientras Gali&oacute;n era gobernador de Acaya, los jud&iacute;os a una atacaron a Pablo y lo condujeron al tribunal.</p>

<p><sup class="versenum">13&nbsp;</sup>&mdash;Este hombre &mdash;denunciaron ellos&mdash; anda persuadiendo a la gente a adorar a Dios de una manera que va en contra de nuestra ley.</p>

<p><sup class="versenum">14&nbsp;</sup>Pablo ya iba a hablar cuando Gali&oacute;n les dijo:</p>

<p>&mdash;Si ustedes los jud&iacute;os estuvieran entablando una demanda sobre alg&uacute;n delito o alg&uacute;n crimen grave, ser&iacute;a razonable que los escuchara.<sup class="versenum">15&nbsp;</sup>Pero, como se trata de cuestiones de palabras, de nombres y de su propia ley, arr&eacute;glense entre ustedes. No quiero ser juez de tales cosas.</p>

<p><sup class="versenum">16&nbsp;</sup>As&iacute; que mand&oacute; que los expulsaran del tribunal.<sup class="versenum">17&nbsp;</sup>Entonces se abalanzaron todos sobre S&oacute;stenes, el jefe de la sinagoga, y lo golpearon delante del tribunal. Pero Gali&oacute;n no le dio ninguna importancia al asunto.</p>

<h3>Priscila, Aquila y Apolos</h3>

<p><sup class="versenum">18&nbsp;</sup>Pablo permaneci&oacute; en Corinto alg&uacute;n tiempo m&aacute;s. Despu&eacute;s se despidi&oacute; de los hermanos y emprendi&oacute; el viaje rumbo a Siria, acompa&ntilde;ado de Priscila y Aquila. En Cencreas, antes de embarcarse, se hizo rapar la cabeza a causa de un voto que hab&iacute;a hecho.<sup class="versenum">19&nbsp;</sup>Al llegar a &Eacute;feso, Pablo se separ&oacute; de sus acompa&ntilde;antes y entr&oacute; en la sinagoga, donde se puso a discutir con los jud&iacute;os.<sup class="versenum">20&nbsp;</sup>Estos le pidieron que se quedara m&aacute;s tiempo con ellos. &Eacute;l no accedi&oacute;,<sup class="versenum">21&nbsp;</sup>pero al despedirse les prometi&oacute;: &laquo;Ya volver&eacute;, si Dios quiere&raquo;. Y zarp&oacute; de &Eacute;feso.<sup class="versenum">22&nbsp;</sup>Cuando desembarc&oacute; en Cesarea, subi&oacute; a Jerusal&eacute;n a saludar a la iglesia y luego baj&oacute; a Antioqu&iacute;a.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/336.mp4" type="button" class="external-movie">
         Mira Hechos 18:1-22</button>
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
<p class="up">Corinto fue una importante ciudad econ&oacute;mica en el mundo antiguo conocida por su cultura inmoral. Cuando Pablo lleg&oacute;, conoci&oacute; a Aquila y Priscila, que acababa de llegar de Roma. Eran gente de negocios de ideas afines que se convirti&oacute; en un poderoso equipo de plantaci&oacute;n de iglesias de marido y mujer. Pablo trabaj&oacute; junto a ellos en los negocios y el ministerio. Cuando Silas y Timoteo llegaron de Macedonia, trajeron apoyo financiero y noticias de c&oacute;mo estaban los nuevos creyentes en Tesal&oacute;nica (1 Tesalonicenses 3:2). Pablo escribi&oacute; sus dos cartas a los disc&iacute;pulos en Tesal&oacute;nica mientras estaba plantando iglesias en Corinto. Pablo enfrent&oacute; mucha presi&oacute;n social y luch&oacute; contra los temores (Hechos 18:9), pero el Se&ntilde;or le dijo que siguiera adelante. Lee 1 Corintios 1:14-16. Un gran n&uacute;mero de personas llegaron a la fe en Jes&uacute;s, sin embargo, en la carta de Pablo a los Corintios descubrimos que Pablo s&oacute;lo bautiz&oacute; a los primeros creyentes. Aprendemos la importancia de empoderar a los nuevos creyentes para la misi&oacute;n de hacer disc&iacute;pulos, bautizarlos y ense&ntilde;arles tal como Jes&uacute;s mand&oacute;.</p>

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

			<td class="social" @click="share('lesson', 'Plantación de iglesias en la capital de Acaya (Corinto): ', '/content/M2/spa/multiply3/multiply336.html')">
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