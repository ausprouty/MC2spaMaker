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
                        <div class="chapter_number ltr"><h1>22.</h1></div>
                        <div class="chapter_title ltr"><h1>Quinta expedición para pescar hombres</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 5:17-26</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 5:17-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s sana a un paral&iacute;tico</h3>

<p><sup class="versenum">17&nbsp;</sup>Un d&iacute;a, mientras ense&ntilde;aba, estaban sentados all&iacute; algunos fariseos y maestros de la ley que hab&iacute;an venido de todas las aldeas de Galilea y Judea, y tambi&eacute;n de Jerusal&eacute;n. Y el poder del Se&ntilde;or estaba con &eacute;l para sanar a los enfermos.<sup class="versenum">18&nbsp;</sup>Entonces llegaron unos hombres que llevaban en una camilla a un paral&iacute;tico. Procuraron entrar para ponerlo delante de Jes&uacute;s,<sup class="versenum">19&nbsp;</sup>pero no pudieron a causa de la multitud. As&iacute; que subieron a la azotea y, separando las tejas, lo bajaron en la camilla hasta ponerlo en medio de la gente, frente a Jes&uacute;s.</p>

<p><sup class="versenum">20&nbsp;</sup>Al ver la fe de ellos, Jes&uacute;s dijo:</p>

<p>&mdash;Amigo, tus pecados quedan perdonados.</p>

<p><sup class="versenum">21&nbsp;</sup>Los fariseos y los maestros de la ley comenzaron a pensar: &laquo;&iquest;Qui&eacute;n es este que dice blasfemias? &iquest;Qui&eacute;n puede perdonar pecados sino solo Dios?&raquo;</p>

<p><sup class="versenum">22&nbsp;</sup>Pero Jes&uacute;s supo lo que estaban pensando y les dijo:</p>

<p>&mdash;&iquest;Por qu&eacute; razonan as&iacute;?<sup class="versenum">23&nbsp;</sup>&iquest;Qu&eacute; es m&aacute;s f&aacute;cil decir: &ldquo;Tus pecados quedan perdonados&rdquo;, o &ldquo;Lev&aacute;ntate y anda&rdquo;?<sup class="versenum">24&nbsp;</sup>Pues para que sepan que el Hijo del hombre tiene autoridad en la tierra para perdonar pecados &mdash;se dirigi&oacute; entonces al paral&iacute;tico&mdash;: A ti te digo, lev&aacute;ntate, toma tu camilla y vete a tu casa.</p>

<p><sup class="versenum">25&nbsp;</sup>Al instante se levant&oacute; a la vista de todos, tom&oacute; la camilla en que hab&iacute;a estado acostado, y se fue a su casa alabando a Dios.<sup class="versenum">26&nbsp;</sup>Todos quedaron asombrados y ellos tambi&eacute;n alababan a Dios. Estaban llenos de temor y dec&iacute;an: &laquo;Hoy hemos visto maravillas&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/222.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 5:17-26&nbsp;</button>
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
<p class="up">El movimiento est&aacute; creciendo. Multitudes de todas partes vinieron a escuchar a Jes&uacute;s y ser sanados. La curaci&oacute;n del hombre con lepra hab&iacute;a tra&iacute;do fariseos y maestros de la Ley de todas las aldeas de Galilea y Judea y Jerusal&eacute;n. Los l&iacute;deres se hab&iacute;an reunido para saber m&aacute;s sobre este hombre que hab&iacute;a curado a un leproso. En esta ocasi&oacute;n, Jes&uacute;s estaba sanando a muchos a trav&eacute;s del poder del Esp&iacute;ritu. Cuatro amigos audazmente forzaron su camino al frente de la multitud para llevar a su amigo paralizado a Jes&uacute;s. &Eacute;l us&oacute; la situaci&oacute;n como su quinto alcance, para testificar a los l&iacute;deres religiosos acerca de qui&eacute;n es realmente. Los l&iacute;deres entendieron las implicaciones de lo que Jes&uacute;s dijo e hizo. Al perdonar los pecados del hombre, Jes&uacute;s se muestra igual a Dios. Todos los que vieron la curaci&oacute;n dieron gloria al Padre.</p>
<ul>
<li class="nobreak-final-final">Estudio adicional: <span class="popup-link" @click = "popUp('pop3')"> Mateo 9:1-8</span>;&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Subi&oacute; Jes&uacute;s a una barca, cruz&oacute; al otro lado y lleg&oacute; a su propio pueblo.<sup class="versenum">2&nbsp;</sup>Unos hombres le llevaron un paral&iacute;tico, acostado en una camilla. Al ver Jes&uacute;s la fe de ellos, le dijo al paral&iacute;tico:</p>

<p>&mdash;&iexcl;&Aacute;nimo, hijo; tus pecados quedan perdonados!</p>

<p><sup class="versenum">3&nbsp;</sup>Algunos de los maestros de la ley murmuraron entre ellos: &laquo;&iexcl;Este hombre blasfema!&raquo;</p>

<p><sup class="versenum">4&nbsp;</sup>Como Jes&uacute;s conoc&iacute;a sus pensamientos, les dijo:</p>

<p>&mdash;&iquest;Por qu&eacute; dan lugar a tan malos pensamientos?<sup class="versenum">5&nbsp;</sup>&iquest;Qu&eacute; es m&aacute;s f&aacute;cil, decir: &ldquo;Tus pecados quedan perdonados&rdquo;, o decir: &ldquo;Lev&aacute;ntate y anda&rdquo;?<sup class="versenum">6&nbsp;</sup>Pues para que sepan que el Hijo del hombre tiene autoridad en la tierra para perdonar pecados &mdash;se dirigi&oacute; entonces al paral&iacute;tico&mdash;: Lev&aacute;ntate, toma tu camilla y vete a tu casa.</p>

<p><sup class="versenum">7&nbsp;</sup>Y el hombre se levant&oacute; y se fue a su casa.<sup class="versenum">8&nbsp;</sup>Al ver esto, la multitud se llen&oacute; de temor y glorific&oacute; a Dios por haber dado tal autoridad a los mortales.</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> Marcos 2:1-13</span>.

<div class="popup invisible" id="pop4"><!-- begin bible -->
<h3>Jes&uacute;s sana a un paral&iacute;tico</h3>

<p><sup class="versenum">1 </sup>Unos d&iacute;as despu&eacute;s, cuando Jes&uacute;s entr&oacute; de nuevo en Caperna&uacute;m, corri&oacute; la voz de que estaba en casa.<sup class="versenum">2&nbsp;</sup>Se aglomeraron tantos que ya no quedaba sitio ni siquiera frente a la puerta mientras &eacute;l les predicaba la palabra.<sup class="versenum">3&nbsp;</sup>Entonces llegaron cuatro hombres que le llevaban un paral&iacute;tico.<sup class="versenum">4&nbsp;</sup>Como no pod&iacute;an acercarlo a Jes&uacute;s por causa de la multitud, quitaron parte del techo encima de donde estaba Jes&uacute;s y, luego de hacer una abertura, bajaron la camilla en la que estaba acostado el paral&iacute;tico.<sup class="versenum">5&nbsp;</sup>Al ver Jes&uacute;s la fe de ellos, le dijo al paral&iacute;tico:</p>

<p>&mdash;Hijo, tus pecados quedan perdonados.</p>

<p><sup class="versenum">6&nbsp;</sup>Estaban sentados all&iacute; algunos maestros de la ley, que pensaban:<sup class="versenum">7&nbsp;</sup>&laquo;&iquest;Por qu&eacute; habla este as&iacute;? &iexcl;Est&aacute; blasfemando! &iquest;Qui&eacute;n puede perdonar pecados sino solo Dios?&raquo;</p>

<p><sup class="versenum">8&nbsp;</sup>En ese mismo instante supo Jes&uacute;s en su esp&iacute;ritu que esto era lo que estaban pensando.</p>

<p>&mdash;&iquest;Por qu&eacute; razonan as&iacute;? &mdash;les dijo&mdash;.<sup class="versenum">9&nbsp;</sup>&iquest;Qu&eacute; es m&aacute;s f&aacute;cil, decirle al paral&iacute;tico: &ldquo;Tus pecados son perdonados&rdquo;, o decirle: &ldquo;Lev&aacute;ntate, toma tu camilla y anda&rdquo;?<sup class="versenum">10&nbsp;</sup>Pues para que sepan que el Hijo del hombre tiene autoridad en la tierra para perdonar pecados &mdash;se dirigi&oacute; entonces al paral&iacute;tico&mdash;:<sup class="versenum">11&nbsp;</sup>A ti te digo, lev&aacute;ntate, toma tu camilla y vete a tu casa.</p>

<p><sup class="versenum">12&nbsp;</sup>&Eacute;l se levant&oacute;, tom&oacute; su camilla en seguida y sali&oacute; caminando a la vista de todos. Ellos se quedaron asombrados y comenzaron a alabar a Dios.</p>

<p>&mdash;Jam&aacute;s hab&iacute;amos visto cosa igual &mdash;dec&iacute;an.</p>

<p><sup class="versenum">13&nbsp;</sup>De nuevo sali&oacute; Jes&uacute;s a la orilla del lago. Toda la gente acud&iacute;a a &eacute;l, y &eacute;l les ense&ntilde;aba.</p>
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

			<td class="social" @click="share('lesson', 'Quinta expedición para pescar hombres: ', '/content/M2/spa/multiply2/multiply222.html')">
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