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
                        <div class="chapter_number ltr"><h1>35.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderando en medio de la aflicción</h1></div>
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
	<li class="back">Lea o vea <strong>Mateo 14:1-14; Marcos 6:30</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Mateo 14:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Decapitaci&oacute;n de Juan el Bautista</h3>

<p><sup class="versenum">1 </sup>En aquel tiempo Herodes el tetrarca se enter&oacute; de lo que dec&iacute;an de Jes&uacute;s,<sup class="versenum">2&nbsp;</sup>y coment&oacute; a sus sirvientes: &laquo;&iexcl;Ese es Juan el Bautista; ha resucitado! Por eso tiene poder para realizar milagros&raquo;.</p>

<p><sup class="versenum">3&nbsp;</sup>En efecto, Herodes hab&iacute;a arrestado a Juan. Lo hab&iacute;a encadenado y metido en la c&aacute;rcel por causa de Herod&iacute;as, esposa de su hermano Felipe.<sup class="versenum">4&nbsp;</sup>Es que Juan hab&iacute;a estado dici&eacute;ndole: &laquo;La ley te proh&iacute;be tenerla por esposa&raquo;.<sup class="versenum">5&nbsp;</sup>Herodes quer&iacute;a matarlo, pero le ten&iacute;a miedo a la gente, porque consideraban a Juan como un profeta.</p>

<p><sup class="versenum">6&nbsp;</sup>En el cumplea&ntilde;os de Herodes, la hija de Herod&iacute;as bail&oacute; delante de todos; y tanto le agrad&oacute; a Herodes<sup class="versenum">7&nbsp;</sup>que le prometi&oacute; bajo juramento darle cualquier cosa que pidiera.<sup class="versenum">8&nbsp;</sup>Instigada por su madre, le pidi&oacute;: &laquo;Dame en una bandeja la cabeza de Juan el Bautista&raquo;.</p>

<p><sup class="versenum">9&nbsp;</sup>El rey se entristeci&oacute;, pero, a causa de sus juramentos y en atenci&oacute;n a los invitados, orden&oacute; que se le concediera la petici&oacute;n,<sup class="versenum">10&nbsp;</sup>y mand&oacute; decapitar a Juan en la c&aacute;rcel.<sup class="versenum">11&nbsp;</sup>Llevaron la cabeza en una bandeja y se la dieron a la muchacha, quien se la entreg&oacute; a su madre.<sup class="versenum">12&nbsp;</sup>Luego llegaron los disc&iacute;pulos de Juan, recogieron el cuerpo y le dieron sepultura. Despu&eacute;s fueron y avisaron a Jes&uacute;s.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/235.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 14:1-12&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Lee Marcos 6:30</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<h3>Jes&uacute;s alimenta a los cinco mil</h3>

<p><sup class="versenum">30&nbsp;</sup>Los ap&oacute;stoles se reunieron con Jes&uacute;s y le contaron lo que hab&iacute;an hecho y ense&ntilde;ado.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/235-1.mp4" type="button" class="external-movie">
         Mira &nbsp;Marcos 6:30&nbsp;</button>
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

<p class="up">Mientras los ap&oacute;stoles estaban en sus viajes de ministerio, el rey Herodes Antipas estaba celebrando su cumplea&ntilde;os. Organiz&oacute; un gran banquete e invit&oacute; a todos los comandantes militares y a la gente de clase alta de Galilea a uno de sus palacios. Le hizo una promesa tonta a su sobrina porque le gustaba la forma en que bailaba para los invitados. Su madre, Herod&iacute;as, aprovech&oacute; la oportunidad para vengarse de Juan el Bautista. Ella pidi&oacute; su decapitaci&oacute;n. Herodes, no dispuesto a perder la cara delante de sus invitados, hizo lo que Herod&iacute;as le pidi&oacute; y ejecut&oacute; a Juan. Mientras tanto, Jes&uacute;s continuaba Su entrenamiento y discipulado de otros mientras viajaba de pueblo en pueblo (<span class="popup-link" @click = "popUp('pop3')"> Mateo 11:1</span>).&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Cuando Jes&uacute;s termin&oacute; de dar instrucciones a sus doce disc&iacute;pulos, se fue de all&iacute; a ense&ntilde;ar y a predicar en otros pueblos.</p>
<!-- end bible --></div>

<p>La noticia de la muerte de Juan lleg&oacute; a Jes&uacute;s aproximadamente al mismo tiempo que los ap&oacute;stoles regresaban de sus viajes misioneros. Jes&uacute;s estaba afligido por la muerte de Juan y quer&iacute;a estar con sus l&iacute;deres m&aacute;s cercanos. Trataron de encontrar un lugar para un retiro tranquilo. Estaba modelando c&oacute;mo liderar en tiempos de dolor y agotamiento.</p>

<p>&nbsp;</p>

<ul>
	<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop4')"> Marcos 6:14-34</span>;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<h3>Decapitaci&oacute;n de Juan el Bautista</h3>

	<p><sup class="versenum">14&nbsp;</sup>El rey Herodes se enter&oacute; de esto, pues el nombre de Jes&uacute;s se hab&iacute;a hecho famoso. Algunos dec&iacute;an: &laquo;Juan el Bautista ha resucitado, y por eso tiene poder para realizar milagros&raquo;.<sup class="versenum">15&nbsp;</sup>Otros dec&iacute;an: &laquo;Es El&iacute;as&raquo;. Otros, en fin, afirmaban: &laquo;Es un profeta, como los de antes&raquo;.<sup class="versenum">16&nbsp;</sup>Pero, cuando Herodes oy&oacute; esto, exclam&oacute;: &laquo;&iexcl;Juan, al que yo mand&eacute; que le cortaran la cabeza, ha resucitado!&raquo;</p>

	<p><sup class="versenum">17&nbsp;</sup>En efecto, Herodes mismo hab&iacute;a mandado que arrestaran a Juan y que lo encadenaran en la c&aacute;rcel. Herodes se hab&iacute;a casado con Herod&iacute;as, esposa de Felipe su hermano,<sup class="versenum">18&nbsp;</sup>y Juan le hab&iacute;a estado diciendo a Herodes: &laquo;La ley te proh&iacute;be tener a la esposa de tu hermano&raquo;.<sup class="versenum">19&nbsp;</sup>Por eso Herod&iacute;as le guardaba rencor a Juan y deseaba matarlo. Pero no hab&iacute;a logrado hacerlo,<sup class="versenum">20&nbsp;</sup>ya que Herodes tem&iacute;a a Juan y lo proteg&iacute;a, pues sab&iacute;a que era un hombre justo y santo. Cuando Herodes o&iacute;a a Juan, se quedaba muy desconcertado, pero lo escuchaba con gusto.</p>

	<p><sup class="versenum">21&nbsp;</sup>Por fin se present&oacute; la oportunidad. En su cumplea&ntilde;os Herodes dio un banquete a sus altos oficiales, a los comandantes militares y a los notables de Galilea.<sup class="versenum">22&nbsp;</sup>La hija de Herod&iacute;as entr&oacute; en el banquete y bail&oacute;, y esto agrad&oacute; a Herodes y a los invitados.</p>

	<p>&mdash;P&iacute;deme lo que quieras y te lo dar&eacute; &mdash;le dijo el rey a la muchacha.</p>

	<p><sup class="versenum">23&nbsp;</sup>Y le prometi&oacute; bajo juramento:</p>

	<p>&mdash;Te dar&eacute; cualquier cosa que me pidas, aun cuando sea la mitad de mi reino.</p>

	<p><sup class="versenum">24&nbsp;</sup>Ella sali&oacute; a preguntarle a su madre:</p>

	<p>&mdash;&iquest;Qu&eacute; debo pedir?</p>

	<p>&mdash;La cabeza de Juan el Bautista &mdash;contest&oacute;.</p>

	<p><sup class="versenum">25&nbsp;</sup>En seguida se fue corriendo la muchacha a presentarle al rey su petici&oacute;n:</p>

	<p>&mdash;Quiero que ahora mismo me des en una bandeja la cabeza de Juan el Bautista.</p>

	<p><sup class="versenum">26&nbsp;</sup>El rey se qued&oacute; angustiado, pero, a causa de sus juramentos y en atenci&oacute;n a los invitados, no quiso desairarla.<sup class="versenum">27&nbsp;</sup>As&iacute; que en seguida envi&oacute; a un verdugo con la orden de llevarle la cabeza de Juan. El hombre fue, decapit&oacute; a Juan en la c&aacute;rcel<sup class="versenum">28&nbsp;</sup>y volvi&oacute; con la cabeza en una bandeja. Se la entreg&oacute; a la muchacha, y ella se la dio a su madre.<sup class="versenum">29&nbsp;</sup>Al enterarse de esto, los disc&iacute;pulos de Juan fueron a recoger el cuerpo y le dieron sepultura.</p>

	<p><sup class="versenum">30&nbsp;</sup>Los ap&oacute;stoles se reunieron con Jes&uacute;s y le contaron lo que hab&iacute;an hecho y ense&ntilde;ado.</p>

	<p><sup class="versenum">31&nbsp;</sup>Y, como no ten&iacute;an tiempo ni para comer, pues era tanta la gente que iba y ven&iacute;a, Jes&uacute;s les dijo:</p>

	<p>&mdash;Vengan conmigo ustedes solos a un lugar tranquilo y descansen un poco.</p>

	<p><sup class="versenum">32&nbsp;</sup>As&iacute; que se fueron solos en la barca a un lugar solitario.<sup class="versenum">33&nbsp;</sup>Pero muchos que los vieron salir los reconocieron y, desde todos los poblados, corrieron por tierra hasta all&aacute; y llegaron antes que ellos.<sup class="versenum">34&nbsp;</sup>Cuando Jes&uacute;s desembarc&oacute; y vio tanta gente, tuvo compasi&oacute;n de ellos, porque eran como ovejas sin pastor. As&iacute; que comenz&oacute; a ense&ntilde;arles muchas cosas.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Lucas 9:7-11</span>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>Herodes el tetrarca se enter&oacute; de todo lo que estaba sucediendo. Estaba perplejo porque algunos dec&iacute;an que Juan hab&iacute;a resucitado;<sup class="versenum">8&nbsp;</sup>otros, que se hab&iacute;a aparecido El&iacute;as; y otros, en fin, que hab&iacute;a resucitado alguno de los antiguos profetas.<sup class="versenum">9&nbsp;</sup>Pero Herodes dijo: &laquo;A Juan mand&eacute; que le cortaran la cabeza; &iquest;qui&eacute;n es, entonces, este de quien oigo tales cosas?&raquo; Y procuraba verlo.</p>

	<p><sup class="versenum">10&nbsp;</sup>Cuando regresaron los ap&oacute;stoles, le relataron a Jes&uacute;s lo que hab&iacute;an hecho. &Eacute;l se los llev&oacute; consigo y se retiraron solos a un pueblo llamado Betsaida,<sup class="versenum">11&nbsp;</sup>pero la gente se enter&oacute; y lo sigui&oacute;. &Eacute;l los recibi&oacute; y les habl&oacute; del reino de Dios. Tambi&eacute;n san&oacute; a los que lo necesitaban.</p>
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

			<td class="social" @click="share('lesson', 'Liderando en medio de la aflicción: ', '/content/M2/spa/multiply2/multiply235.html')">
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