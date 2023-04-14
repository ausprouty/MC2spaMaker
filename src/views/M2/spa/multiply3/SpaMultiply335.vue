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
                        <div class="chapter_number ltr"><h1>35.</h1></div>
                        <div class="chapter_title ltr"><h1>Plantación de iglesias en el Centro Religioso Pagano (Atenas)</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 17:16-34</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 17:16-34</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>En Atenas</h3>

<p><sup class="versenum">16&nbsp;</sup>Mientras Pablo los esperaba en Atenas, le doli&oacute; en el alma ver que la ciudad estaba llena de &iacute;dolos.<sup class="versenum">17&nbsp;</sup>As&iacute; que discut&iacute;a en la sinagoga con los jud&iacute;os y con los griegos que adoraban a Dios, y a diario hablaba en la plaza con los que se encontraban por all&iacute;.<sup class="versenum">18&nbsp;</sup>Algunos fil&oacute;sofos epic&uacute;reos y estoicos entablaron conversaci&oacute;n con &eacute;l. Unos dec&iacute;an: &laquo;&iquest;Qu&eacute; querr&aacute; decir este charlat&aacute;n?&raquo; Otros comentaban: &laquo;Parece que es predicador de dioses extranjeros&raquo;. Dec&iacute;an esto porque Pablo les anunciaba las buenas nuevas de Jes&uacute;s y de la resurrecci&oacute;n.<sup class="versenum">19&nbsp;</sup>Entonces se lo llevaron a una reuni&oacute;n del Are&oacute;pago.</p>

<p>&mdash;&iquest;Se puede saber qu&eacute; nueva ense&ntilde;anza es esta que usted presenta? &mdash;le preguntaron&mdash;.<sup class="versenum">20&nbsp;</sup>Porque nos viene usted con ideas que nos suenan extra&ntilde;as, y queremos saber qu&eacute; significan.</p>

<p><sup class="versenum">21&nbsp;</sup>Es que todos los atenienses y los extranjeros que viv&iacute;an all&iacute; se pasaban el tiempo sin hacer otra cosa m&aacute;s que escuchar y comentar las &uacute;ltimas novedades.</p>

<p><sup class="versenum">22&nbsp;</sup>Pablo se puso en medio del Are&oacute;pago y tom&oacute; la palabra:</p>

<p>&mdash;&iexcl;Ciudadanos atenienses! Observo que ustedes son sumamente religiosos en todo lo que hacen.<sup class="versenum">23&nbsp;</sup>Al pasar y fijarme en sus lugares sagrados, encontr&eacute; incluso un altar con esta inscripci&oacute;n: <span class="small-caps">A un dios desconocido. Pues bien, eso que ustedes adoran como algo desconocido es lo que yo les anuncio.</span></p>

<p><sup class="versenum">24&nbsp;</sup>&raquo;El Dios que hizo el mundo y todo lo que hay en &eacute;l es Se&ntilde;or del cielo y de la tierra. No vive en templos construidos por hombres,<sup class="versenum">25&nbsp;</sup>ni se deja servir por manos humanas, como si necesitara de algo. Por el contrario, &eacute;l es quien da a todos la vida, el aliento y todas las cosas.<sup class="versenum">26&nbsp;</sup>De un solo hombre hizo todas las naciones para que habitaran toda la tierra; y determin&oacute; los per&iacute;odos de su historia y las fronteras de sus territorios.<sup class="versenum">27&nbsp;</sup>Esto lo hizo Dios para que todos lo busquen y, aunque sea a tientas, lo encuentren. En verdad, &eacute;l no est&aacute; lejos de ninguno de nosotros,<sup class="versenum">28&nbsp;</sup>&ldquo;puesto que en &eacute;l vivimos, nos movemos y existimos&rdquo;. Como algunos de sus propios poetas griegos han dicho: &ldquo;De &eacute;l somos descendientes&rdquo;.</p>

<p><sup class="versenum">29&nbsp;</sup>&raquo;Por tanto, siendo descendientes de Dios, no debemos pensar que la divinidad sea como el oro, la plata o la piedra: escultura hecha como resultado del ingenio y de la destreza del ser humano.<sup class="versenum">30&nbsp;</sup>Pues bien, Dios pas&oacute; por alto aquellos tiempos de tal ignorancia, pero ahora manda a todos, en todas partes, que se arrepientan.<sup class="versenum">31&nbsp;</sup>&Eacute;l ha fijado un d&iacute;a en que juzgar&aacute; al mundo con justicia, por medio del hombre que ha designado. De ello ha dado pruebas a todos al levantarlo de entre los muertos&raquo;.</p>

<p><sup class="versenum">32&nbsp;</sup>Cuando oyeron de la resurrecci&oacute;n, unos se burlaron; pero otros le dijeron:</p>

<p>&mdash;Queremos que usted nos hable en otra ocasi&oacute;n sobre este tema.</p>

<p><sup class="versenum">33&nbsp;</sup>En ese momento Pablo sali&oacute; de la reuni&oacute;n.<sup class="versenum">34&nbsp;</sup>Algunas personas se unieron a Pablo y creyeron. Entre ellos estaba Dionisio, miembro del Are&oacute;pago, tambi&eacute;n una mujer llamada D&aacute;maris, y otros m&aacute;s.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/335.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 17:16-34&nbsp;</button>
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
<p class="up">Pablo ten&iacute;a gran compasi&oacute;n por la p&eacute;rdida de la gente y estaba entristecido por la cantidad de dioses falsos que la gente trat&oacute; de complacer. Mientras esperaba a que Silas y Timoteo llegaran de Macedonia, Pablo continu&oacute; haciendo evangelismo con las diferentes personas en la ciudad griega de Atenas: la peque&ntilde;a comunidad de jud&iacute;os en la sinagoga local, el p&uacute;blico pagano en general en el mercado y diferentes tipos de fil&oacute;sofos educados (como profesores universitarios). Esto llev&oacute; a aquellas personas que ten&iacute;an curiosidad por el mensaje a concertar una reuni&oacute;n con los l&iacute;deres de la ciudad. Vemos c&oacute;mo Pablo adapt&oacute; su mensaje para la audiencia de los l&iacute;deres atenienses partiendo de su contexto de tener un &quot;dios desconocido&quot; y citando a uno de sus poetas. Pablo nos muestra que la forma en que comunicamos el Evangelio se puede ajustar a diferentes culturas sin cambiar el mensaje del Evangelio de la necesidad de arrepentirse y creer en Jes&uacute;s. A diferencia de otras ciudades, hubo muy poca respuesta en Atenas.</p>

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

			<td class="social" @click="share('lesson', 'Plantación de iglesias en el Centro Religioso Pagano (Atenas): ', '/content/M2/spa/multiply3/multiply335.html')">
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