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
                        <div class="chapter_number ltr"><h1>34.</h1></div>
                        <div class="chapter_title ltr"><h1>Enviando líderes</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 9:1-6; Mateo 10:5-23</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 9:1-6</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s env&iacute;a a los doce</h3>

<p><sup class="versenum">1 </sup>Habiendo reunido a los doce, Jes&uacute;s les dio poder y autoridad para expulsar a todos los demonios y para sanar enfermedades.<sup class="versenum">2&nbsp;</sup>Entonces los envi&oacute; a predicar el reino de Dios y a sanar a los enfermos.<sup class="versenum">3&nbsp;</sup>&laquo;No lleven nada para el camino: ni bast&oacute;n, ni bolsa, ni pan, ni dinero, ni dos mudas de ropa &mdash;les dijo&mdash;.<sup class="versenum">4&nbsp;</sup>En cualquier casa que entren, qu&eacute;dense all&iacute; hasta que salgan del pueblo.<sup class="versenum">5&nbsp;</sup>Si no los reciben bien, al salir de ese pueblo, sac&uacute;danse el polvo de los pies como un testimonio contra sus habitantes&raquo;.<sup class="versenum">6&nbsp;</sup>As&iacute; que partieron y fueron por todas partes de pueblo en pueblo, predicando el evangelio y sanando a la gente.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/234.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 9:1-6&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Lee Mateo 10:5-23</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<p><sup class="versenum">5&nbsp;</sup>Jes&uacute;s envi&oacute; a estos doce con las siguientes instrucciones: &laquo;No vayan entre los gentiles ni entren en ning&uacute;n pueblo de los samaritanos.<sup class="versenum">6&nbsp;</sup>Vayan m&aacute;s bien a las ovejas descarriadas del pueblo de Israel.<sup class="versenum">7&nbsp;</sup>Dondequiera que vayan, prediquen este mensaje: &ldquo;El reino de los cielos est&aacute; cerca&rdquo;.<sup class="versenum">8&nbsp;</sup>Sanen a los enfermos, resuciten a los muertos, limpien de su enfermedad a los que tienen lepra, expulsen a los demonios. Lo que ustedes recibieron gratis, denlo gratuitamente.<sup class="versenum">9&nbsp;</sup>No lleven oro ni plata ni cobre en el cintur&oacute;n,<sup class="versenum">10&nbsp;</sup>ni bolsa para el camino, ni dos mudas de ropa, ni sandalias, ni bast&oacute;n; porque el trabajador merece que se le d&eacute; su sustento.</p>

<p><sup class="versenum">11&nbsp;</sup>&raquo;En cualquier pueblo o aldea donde entren, busquen a alguien que merezca recibirlos, y qu&eacute;dense en su casa hasta que se vayan de ese lugar.<sup class="versenum">12&nbsp;</sup>Al entrar, digan: &ldquo;Paz a esta casa&rdquo;.<sup class="versenum">13&nbsp;</sup>Si el hogar se lo merece, que la paz de ustedes reine en &eacute;l; y, si no, que la paz se vaya con ustedes.<sup class="versenum">14&nbsp;</sup>Si alguno no los recibe bien ni escucha sus palabras, al salir de esa casa o de ese pueblo, sac&uacute;danse el polvo de los pies.<sup class="versenum">15&nbsp;</sup>Les aseguro que en el d&iacute;a del juicio el castigo para Sodoma y Gomorra ser&aacute; m&aacute;s tolerable que para ese pueblo.<sup class="versenum">16&nbsp;</sup>Los env&iacute;o como ovejas en medio de lobos. Por tanto, sean astutos como serpientes y sencillos como palomas.</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;Tengan cuidado con la gente; los entregar&aacute;n a los tribunales y los azotar&aacute;n en las sinagogas.<sup class="versenum">18&nbsp;</sup>Por mi causa los llevar&aacute;n ante gobernadores y reyes para dar testimonio a ellos y a los gentiles.<sup class="versenum">19&nbsp;</sup>Pero, cuando los arresten, no se preocupen por lo que van a decir o c&oacute;mo van a decirlo. En ese momento se les dar&aacute; lo que han de decir,<sup class="versenum">20&nbsp;</sup>porque no ser&aacute;n ustedes los que hablen, sino que el Esp&iacute;ritu de su Padre hablar&aacute; por medio de ustedes.</p>

<p><sup class="versenum">21&nbsp;</sup>&raquo;El hermano entregar&aacute; a la muerte al hermano, y el padre al hijo. Los hijos se rebelar&aacute;n contra sus padres y har&aacute;n que los maten.<sup class="versenum">22&nbsp;</sup>Por causa de mi nombre todo el mundo los odiar&aacute;, pero el que se mantenga firme hasta el fin ser&aacute; salvo.<sup class="versenum">23&nbsp;</sup>Cuando los persigan en una ciudad, huyan a otra. Les aseguro que no terminar&aacute;n de recorrer las ciudades de Israel antes de que venga el Hijo del hombre.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/234-1.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 10:5-23&nbsp;</button>
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

<p class="up">Despu&eacute;s de meses de capacitaci&oacute;n ministerial, los l&iacute;deres est&aacute;n listos para ser enviados por su cuenta. Recuerden, fueron nombrados l&iacute;deres para que pudieran estar con Jes&uacute;s y para que &Eacute;l pudiera enviarlos a hacer las mismas cosas que &eacute;l hab&iacute;a estado haciendo. Jes&uacute;s los envi&oacute; en equipos de dos. Les dio instrucciones claras sobre qu&eacute; hacer, qu&eacute; decir, cu&aacute;nto tiempo quedarse y c&oacute;mo responder cuando son perseguidos. &Eacute;l los envi&oacute; a cabo tal como el Padre lo hab&iacute;a enviado al mundo. Deb&iacute;an depender completamente de Dios para todo lo que necesitar&iacute;an. Esta misi&oacute;n a corto plazo era dentro de su propio pa&iacute;s, a personas que eran como ellos y hablaban su idioma. Experimentaron ser enviados y hacer ministerio por primera vez sin que Jes&uacute;s estuviera con ellos. Lo que hab&iacute;a sido un solo equipo de Jes&uacute;s con los doce ap&oacute;stoles ahora se reestructura a siete equipos, seis equipos de dos m&aacute;s Jes&uacute;s.</p>

<p class="up">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Marcos 6:7-13</span>.&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">7&nbsp;</sup>Reuni&oacute; a los doce, y comenz&oacute; a enviarlos de dos en dos, d&aacute;ndoles autoridad sobre los esp&iacute;ritus malignos.</p>

<p><sup class="versenum">8&nbsp;</sup>Les orden&oacute; que no llevaran nada para el camino, ni pan, ni bolsa, ni dinero en el cintur&oacute;n, sino solo un bast&oacute;n.<sup class="versenum">9&nbsp;</sup>&laquo;Lleven sandalias &mdash;dijo&mdash;, pero no dos mudas de ropa&raquo;.<sup class="versenum">10&nbsp;</sup>Y a&ntilde;adi&oacute;: &laquo;Cuando entren en una casa, qu&eacute;dense all&iacute; hasta que salgan del pueblo.<sup class="versenum">11&nbsp;</sup>Y, si en alg&uacute;n lugar no los reciben bien o no los escuchan, al salir de all&iacute; sac&uacute;danse el polvo de los pies, como un testimonio contra ellos&raquo;.</p>

<p><sup class="versenum">12&nbsp;</sup>Los doce salieron y exhortaban a la gente a que se arrepintiera.<sup class="versenum">13&nbsp;</sup>Tambi&eacute;n expulsaban a muchos demonios y sanaban a muchos enfermos, ungi&eacute;ndolos con aceite.</p>
<!-- end bible --></div>

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

			<td class="social" @click="share('lesson', 'Enviando líderes: ', '/content/M2/spa/multiply2/multiply234.html')">
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