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
                        <div class="chapter_number ltr"><h1>16.</h1></div>
                        <div class="chapter_title ltr"><h1>El costo del discipulado</h1></div>
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
	<li class="back">Lee <span class="popup-link" @click = "popUp('pop1')"> Hebreos 13:14-15</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>pues aqu&iacute; no tenemos una ciudad permanente, sino que buscamos la ciudad venidera.</p>

	<p><sup class="versenum">15&nbsp;</sup>As&iacute; que ofrezcamos continuamente a Dios, por medio de Jesucristo, un sacrificio de alabanza, es decir, el fruto de los labios que confiesan su nombre.</p>
	<!-- end bible --></div>
	y canta alabanzas.</li>
	<li class="back">(opcional) Use una Declaraci&oacute;n de Fe acerca de Jes&uacute;s, como <span class="popup-link" @click = "popUp('pop2')"> Filipenses 2:11b</span>;&nbsp;
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>...&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop3')"> 1 Timoteo 2:4-6a</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos.&nbsp;</p>
	</div>
	</li>
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

<p class="back">Ejemplo: El coraz&oacute;n de Dios es para todos los perdidos. Sin embargo, muchos lugares a nuestro alrededor no tienen seguidores de Jes&uacute;s para ser una luz para la comunidad y mostrar el amor de Dios a la gente. Como seguidores de Jes&uacute;s, somos llamados por Dios a alinear nuestros corazones con Su coraz&oacute;n por TODOS los perdidos. Necesitamos perseguir una gran visi&oacute;n que llegue a todas las comunidades perdidas que nos rodean. &iexcl;Estamos confiando en que Dios nos use para traer &quot;una iglesia para cada pueblo y comunidad y el evangelio para cada persona!&quot;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Grandes multitudes comenzaban a seguir a Jes&uacute;s. Oyeron hablar de las curaciones milagrosas y las alimentaciones de las multitudes. Se sintieron atra&iacute;dos por &Eacute;l debido a los beneficios que esperaban recibir de &Eacute;l. Pero Jes&uacute;s conoc&iacute;a sus corazones. &Eacute;l sab&iacute;a que realmente no estaban dispuestos a seguirlo incondicionadamente. &Eacute;l quer&iacute;a que reconocieran que seguirlo significaba entregarle todo a &Eacute;l.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 14:25-33</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 14:25-33</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>El precio del discipulado</h3>

<p><sup class="versenum">25&nbsp;</sup>Grandes multitudes segu&iacute;an a Jes&uacute;s, y &eacute;l se volvi&oacute; y les dijo:<sup class="versenum">26&nbsp;</sup>&laquo;Si alguno viene a m&iacute; y no sacrifica el amor a su padre y a su madre, a su esposa y a sus hijos, a sus hermanos y a sus hermanas, y aun a su propia vida, no puede ser mi disc&iacute;pulo.<sup class="versenum">27&nbsp;</sup>Y el que no carga su cruz y me sigue, no puede ser mi disc&iacute;pulo.</p>

<p><sup class="versenum">28&nbsp;</sup>&raquo;Supongamos que alguno de ustedes quiere construir una torre. &iquest;Acaso no se sienta primero a calcular el costo, para ver si tiene suficiente dinero para terminarla?<sup class="versenum">29&nbsp;</sup>Si echa los cimientos y no puede terminarla, todos los que la vean comenzar&aacute;n a burlarse de &eacute;l,<sup class="versenum">30&nbsp;</sup>y dir&aacute;n: &ldquo;Este hombre ya no pudo terminar lo que comenz&oacute; a construir&rdquo;.</p>

<p><sup class="versenum">31&nbsp;</sup>&raquo;O supongamos que un rey est&aacute; a punto de ir a la guerra contra otro rey. &iquest;Acaso no se sienta primero a calcular si con diez mil hombres puede enfrentarse al que viene contra &eacute;l con veinte mil?<sup class="versenum">32&nbsp;</sup>Si no puede, enviar&aacute; una delegaci&oacute;n mientras el otro est&aacute; todav&iacute;a lejos, para pedir condiciones de paz.<sup class="versenum">33&nbsp;</sup>De la misma manera, cualquiera de ustedes que no renuncie a todos sus bienes, no puede ser mi disc&iacute;pulo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/116.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 14:25-33&nbsp;</button>
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
<ul>
	<li class="nobreak-final-final">Cuando seguimos a Cristo, los beneficios son eternos y incomparables: perd&oacute;n de los pecados, salvaci&oacute;n y seguridad en el Rey de Reyes y Se&ntilde;or de Se&ntilde;ores. Pero ser un disc&iacute;pulo de Jes&uacute;s no te har&aacute; exento del dolor y las pruebas. Debido a que vivimos en un mundo malvado, seguir a Cristo tambi&eacute;n te traer&aacute; persecuci&oacute;n y desaf&iacute;os. Cualquiera que desee vivir una vida piadosa en Jes&uacute;s ser&aacute; perseguido por otros. Pero vamos a ser alentados por Pedro, uno de los amigos m&aacute;s cercanos de Jes&uacute;s, lea <span class="popup-link" @click = "popUp('pop4')"> 1 Pedro 4:12-16</span>


	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>Queridos hermanos, no se extra&ntilde;en del fuego de la prueba que est&aacute;n soportando, como si fuera algo ins&oacute;lito.<sup class="versenum">13&nbsp;</sup>Al contrario, al&eacute;grense de tener parte en los sufrimientos de Cristo, para que tambi&eacute;n sea inmensa su alegr&iacute;a cuando se revele la gloria de Cristo.<sup class="versenum">14&nbsp;</sup>Dichosos ustedes si los insultan por causa del nombre de Cristo, porque el glorioso Esp&iacute;ritu de Dios reposa sobre ustedes.<sup class="versenum">15&nbsp;</sup>Que ninguno tenga que sufrir por asesino, ladr&oacute;n o delincuente, ni siquiera por entrometido.<sup class="versenum">16&nbsp;</sup>Pero, si alguien sufre por ser cristiano, que no se averg&uuml;ence, sino que alabe a Dios por llevar el nombre de Cristo.</p>
	<!-- end bible --></div>
	y <span class="popup-link" @click = "popUp('pop5')"> 1 Pedro 4:19</span>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>As&iacute; pues, los que sufren seg&uacute;n la voluntad de Dios, entr&eacute;guense a su fiel creador y sigan practicando el bien.</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique cualquier habilidad o tema de lecciones anteriores para ayudar a prepararse para ministrar a otros.</li>
	<li>Practique el dar, seg&uacute;n lo acordado. Recuerda el sacrificio de Jes&uacute;s a trav&eacute;s de la Santa Cena, si es necesario.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
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


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'El costo del discipulado: ', '/content/M2/spa/multiply1/multiply116.html')">
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