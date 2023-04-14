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
                        <div class="chapter_number ltr"><h1>14.</h1></div>
                        <div class="chapter_title ltr"><h1>Recordando el Sacrificio de Jesús</h1></div>
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
	<li class="back">Lee <span class="popup-link" @click = "popUp('pop1')"> Mateo 10:28-30</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">28&nbsp;</sup>No teman a los que matan el cuerpo, pero no pueden matar el alma. Teman m&aacute;s bien al que puede destruir alma y cuerpo en el infierno.<sup class="versenum">29&nbsp;</sup>&iquest;No se venden dos gorriones por una monedita? Sin embargo, ni uno de ellos caer&aacute; a tierra sin que lo permita el Padre;<sup class="versenum">30&nbsp;</sup>y &eacute;l les tiene contados a ustedes aun los cabellos de la cabeza.</p>
	<!-- end bible --></div>
	y canten alabanzas.</li>
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

<p class="nobreak-final-final">Ejemplo: Lee <span class="popup-link" @click = "popUp('pop4')"> Hebreos 10:19-25</span>.&nbsp;</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">19&nbsp;</sup>As&iacute; que, hermanos, mediante la sangre de Jes&uacute;s, tenemos plena libertad para entrar en el Lugar Sant&iacute;simo,<sup class="versenum">20&nbsp;</sup>por el camino nuevo y vivo que &eacute;l nos ha abierto a trav&eacute;s de la cortina, es decir, a trav&eacute;s de su cuerpo;<sup class="versenum">21&nbsp;</sup>y tenemos adem&aacute;s un gran sacerdote al frente de la familia de Dios.<sup class="versenum">22&nbsp;</sup>Acerqu&eacute;monos, pues, a Dios con coraz&oacute;n sincero y con la plena seguridad que da la fe, interiormente purificados de una conciencia culpable y exteriormente lavados con agua pura.<sup class="versenum">23&nbsp;</sup>Mantengamos firme la esperanza que profesamos, porque fiel es el que hizo la promesa.<sup class="versenum">24&nbsp;</sup>Preocup&eacute;monos los unos por los otros, a fin de estimularnos al amor y a las buenas obras.<sup class="versenum">25&nbsp;</sup>No dejemos de congregarnos, como acostumbran hacerlo algunos, sino anim&eacute;monos unos a otros, y con mayor raz&oacute;n ahora que vemos que aquel d&iacute;a se acerca.</p>
<!-- end bible --></div>
El Se&ntilde;or no nos llam&oacute; a estar solos. Nos llam&oacute; a estar juntos. Nos enfrentamos a muchos desaf&iacute;os y necesitamos alentarnos y rendir cuentas para obedecer al Se&ntilde;or. Seguir a Jes&uacute;s se hace mejor en comunidad. &iexcl;Nos necesitamos el uno al otro, as&iacute; que no dejemos de reunirnos juntos!

<p>&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Dios les dio a los jud&iacute;os una celebraci&oacute;n especial llamada la Pascua para recordar c&oacute;mo los liber&oacute; de la esclavitud en Egipto. La noche antes de que Jes&uacute;s muriera en la cruz, celebr&oacute; la Pascua con Sus disc&iacute;pulos y explic&oacute; c&oacute;mo la Pascua se refer&iacute;a a &Eacute;l.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 22:14-20</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 22:14-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">14&nbsp;</sup>Cuando lleg&oacute; la hora, Jes&uacute;s y sus ap&oacute;stoles se sentaron a la mesa.<sup class="versenum">15&nbsp;</sup>Entonces les dijo:</p>

<p>&mdash;He tenido much&iacute;simos deseos de comer esta Pascua con ustedes antes de padecer,<sup class="versenum">16&nbsp;</sup>pues les digo que no volver&eacute; a comerla hasta que tenga su pleno cumplimiento en el reino de Dios.</p>

<p><sup class="versenum">17&nbsp;</sup>Luego tom&oacute; la copa, dio gracias y dijo:</p>

<p>&mdash;Tomen esto y rep&aacute;rtanlo entre ustedes.<sup class="versenum">18&nbsp;</sup>Les digo que no volver&eacute; a beber del fruto de la vid hasta que venga el reino de Dios.</p>

<p><sup class="versenum">19&nbsp;</sup>Tambi&eacute;n tom&oacute; pan y, despu&eacute;s de dar gracias, lo parti&oacute;, se lo dio a ellos y dijo:</p>

<p>&mdash;Este pan es mi cuerpo, entregado por ustedes; hagan esto en memoria de m&iacute;.</p>

<p><sup class="versenum">20&nbsp;</sup>De la misma manera tom&oacute; la copa despu&eacute;s de la cena, y dijo:</p>

<p>&mdash;Esta copa es el nuevo pacto en mi sangre, que es derramada por ustedes.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/114.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 22:14-20&nbsp;</button>
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
<p class="up">Jes&uacute;s model&oacute; a Sus seguidores una manera de recordar Su muerte sacrificial en la cruz. [Toma un pedazo de pan] El pan representa Su cuerpo que fue roto por nosotros. [Mu&eacute;streles vino o jugo] La bebida representa Su sangre que fue derramada por nosotros y abri&oacute; un nuevo camino para relacionarse con Dios. Tambi&eacute;n les orden&oacute; que siguieran practic&aacute;ndolo.</p>

<ul>
	<li class="nobreak-final-final">En <span class="popup-link" @click = "popUp('pop5')"> 1 Corintios 11:23-30</span>,&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">23&nbsp;</sup>Yo recib&iacute; del Se&ntilde;or lo mismo que les transmit&iacute; a ustedes: Que el Se&ntilde;or Jes&uacute;s, la noche en que fue traicionado, tom&oacute; pan,<sup class="versenum">24&nbsp;</sup>y, despu&eacute;s de dar gracias, lo parti&oacute; y dijo: &laquo;Este pan es mi cuerpo, que por ustedes entrego; hagan esto en memoria de m&iacute;&raquo;.<sup class="versenum">25&nbsp;</sup>De la misma manera, despu&eacute;s de cenar, tom&oacute; la copa y dijo: &laquo;Esta copa es el nuevo pacto en mi sangre; hagan esto, cada vez que beban de ella, en memoria de m&iacute;&raquo;.<sup class="versenum">26&nbsp;</sup>Porque cada vez que comen este pan y beben de esta copa, proclaman la muerte del Se&ntilde;or hasta que &eacute;l venga.</p>

	<p><sup class="versenum">27&nbsp;</sup>Por lo tanto, cualquiera que coma el pan o beba de la copa del Se&ntilde;or de manera indigna ser&aacute; culpable de pecar contra el cuerpo y la sangre del Se&ntilde;or.<sup class="versenum">28&nbsp;</sup>As&iacute; que cada uno debe examinarse a s&iacute; mismo antes de comer el pan y beber de la copa.<sup class="versenum">29&nbsp;</sup>Porque el que come y bebe sin discernir el cuerpo come y bebe su propia condena.<sup class="versenum">30&nbsp;</sup>Por eso hay entre ustedes muchos d&eacute;biles y enfermos, e incluso varios han muerto.</p>
	<!-- end bible --></div>
	vemos que cuando Pablo comenz&oacute; nuevas iglesias, ense&ntilde;&oacute; a todos los nuevos creyentes c&oacute;mo obedecer el mandato de Jes&uacute;s.</li>
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
	<li>Practique la cena del Se&ntilde;or. Use lo que los l&iacute;deres de la iglesia local han dado o use la pr&aacute;ctica sugerida a continuaci&oacute;n:
	<ul>
		<li>Lee <span class="popup-link" @click = "popUp('pop6')"> 1 Corintios 11:23-30</span>.&nbsp;&nbsp;

		<div class="popup invisible" id="pop6"><!-- begin bible -->
		<p><sup class="versenum">23&nbsp;</sup>Yo recib&iacute; del Se&ntilde;or lo mismo que les transmit&iacute; a ustedes: Que el Se&ntilde;or Jes&uacute;s, la noche en que fue traicionado, tom&oacute; pan,<sup class="versenum">24&nbsp;</sup>y, despu&eacute;s de dar gracias, lo parti&oacute; y dijo: &laquo;Este pan es mi cuerpo, que por ustedes entrego; hagan esto en memoria de m&iacute;&raquo;.<sup class="versenum">25&nbsp;</sup>De la misma manera, despu&eacute;s de cenar, tom&oacute; la copa y dijo: &laquo;Esta copa es el nuevo pacto en mi sangre; hagan esto, cada vez que beban de ella, en memoria de m&iacute;&raquo;.<sup class="versenum">26&nbsp;</sup>Porque cada vez que comen este pan y beben de esta copa, proclaman la muerte del Se&ntilde;or hasta que &eacute;l venga.</p>

		<p><sup class="versenum">27&nbsp;</sup>Por lo tanto, cualquiera que coma el pan o beba de la copa del Se&ntilde;or de manera indigna ser&aacute; culpable de pecar contra el cuerpo y la sangre del Se&ntilde;or.<sup class="versenum">28&nbsp;</sup>As&iacute; que cada uno debe examinarse a s&iacute; mismo antes de comer el pan y beber de la copa.<sup class="versenum">29&nbsp;</sup>Porque el que come y bebe sin discernir el cuerpo come y bebe su propia condena.<sup class="versenum">30&nbsp;</sup>Por eso hay entre ustedes muchos d&eacute;biles y enfermos, e incluso varios han muerto.</p>
		<!-- end bible --></div>
		o Haga una pausa y deles tiempo para confesar sus pecados y hablar con el Se&ntilde;or.</li>
		<li>Dale el pan, diles que esto representa Su cuerpo que fue roto por nosotros. Coman juntos.</li>
		<li>Dale la bebida. D&iacute;gales que esto representa Su sangre que fue derramada por nosotros. Beban juntos.</li>
		<li>Oren y agradezcan al Se&ntilde;or por lo que &Eacute;l ha hecho por nosotros.</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana</li>
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

			<td class="social" @click="share('lesson', 'Recordando el Sacrificio de Jesús: ', '/content/M2/spa/multiply1/multiply114.html')">
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