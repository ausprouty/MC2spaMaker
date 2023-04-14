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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-hope-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>La Esperanza perdona</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<div>
<h2>Cuidando los unos de los otros</h2>

<ul>
	<li>&iquest;Qu&eacute; ha sido lo m&aacute;s destacado de esta semana?</li>
	<li>&iquest;Qu&eacute; ha sido un desaf&iacute;o para ti esta semana?</li>
	<li>&iquest;Qu&eacute; quieres que haga Jes&uacute;s por ti esta semana?</li>
	<li>Ora brevemente para que Jes&uacute;s supla las necesidades que han sido compartidas.</li>
</ul>

<h2>Celebre la fidellidad</h2>

<ul>
	<li>&iquest;De qu&eacute; manera obedeciste a Jes&uacute;s la semana pasada?</li>
	<li>&iquest;Con qui&eacute;n compartiste la historia de la semana pasada?</li>
</ul>

<h2>Motivaci&oacute;n y &aacute;nimo</h2>

<ul>
	<li>An&iacute;mense mutuamente a seguir obedeciendo a Jes&uacute;s y recu&eacute;rdense la importancia de compartir las historias con los dem&aacute;s</li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<h2>Descubrir la Biblia juntos</h2>

<h2>Contexto</h2>


<button id="MC2/spa/video/hope/04-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>Leer:</h2>

<ul>
	<li>Leer Lucas 18:21-35&nbsp;o ver el video,&nbsp;dos veces mientras los dem&aacute;s escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Mateo 18:21-35</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Par&aacute;bola del siervo despiadado</h3>

<p><sup class="versenum">21&nbsp;</sup>Pedro se acerc&oacute; a Jes&uacute;s y le pregunt&oacute;:</p>

<p>&mdash;Se&ntilde;or, &iquest;cu&aacute;ntas veces tengo que perdonar a mi hermano que peca contra m&iacute;? &iquest;Hasta siete veces?</p>

<p><sup class="versenum">22&nbsp;</sup>&mdash;No te digo que hasta siete veces, sino hasta setenta y siete veces &mdash;le contest&oacute; Jes&uacute;s&mdash;.</p>

<p><sup class="versenum">23&nbsp;</sup>&raquo;Por eso el reino de los cielos se parece a un rey que quiso ajustar cuentas con sus siervos.<sup class="versenum">24&nbsp;</sup>Al comenzar a hacerlo, se le present&oacute; uno que le deb&iacute;a miles y miles de monedas de oro.<sup class="versenum">25&nbsp;</sup>Como &eacute;l no ten&iacute;a con qu&eacute; pagar, el se&ntilde;or mand&oacute; que lo vendieran a &eacute;l, a su esposa y a sus hijos, y todo lo que ten&iacute;a, para as&iacute; saldar la deuda.<sup class="versenum">26&nbsp;</sup>El siervo se postr&oacute; delante de &eacute;l. &ldquo;Tenga paciencia conmigo &mdash;le rog&oacute;&mdash;, y se lo pagar&eacute; todo&rdquo;.<sup class="versenum">27&nbsp;</sup>El se&ntilde;or se compadeci&oacute; de su siervo, le perdon&oacute; la deuda y lo dej&oacute; en libertad.</p>

<p><sup class="versenum">28&nbsp;</sup>&raquo;Al salir, aquel siervo se encontr&oacute; con uno de sus compa&ntilde;eros que le deb&iacute;a cien monedas de plata. Lo agarr&oacute; por el cuello y comenz&oacute; a estrangularlo. &ldquo;&iexcl;P&aacute;game lo que me debes!&rdquo;, le exigi&oacute;.<sup class="versenum">29&nbsp;</sup>Su compa&ntilde;ero se postr&oacute; delante de &eacute;l. &ldquo;Ten paciencia conmigo &mdash;le rog&oacute;&mdash;, y te lo pagar&eacute;&rdquo;.<sup class="versenum">30&nbsp;</sup>Pero &eacute;l se neg&oacute;. M&aacute;s bien fue y lo hizo meter en la c&aacute;rcel hasta que pagara la deuda.<sup class="versenum">31&nbsp;</sup>Cuando los dem&aacute;s siervos vieron lo ocurrido, se entristecieron mucho y fueron a contarle a su se&ntilde;or todo lo que hab&iacute;a sucedido.<sup class="versenum">32&nbsp;</sup>Entonces el se&ntilde;or mand&oacute; llamar al siervo. &ldquo;&iexcl;Siervo malvado! &mdash;le increp&oacute;&mdash;. Te perdon&eacute; toda aquella deuda porque me lo suplicaste.<sup class="versenum">33&nbsp;</sup>&iquest;No deb&iacute;as t&uacute; tambi&eacute;n haberte compadecido de tu compa&ntilde;ero, as&iacute; como yo me compadec&iacute; de ti?&rdquo;<sup class="versenum">34&nbsp;</sup>Y, enojado, su se&ntilde;or lo entreg&oacute; a los carceleros para que lo torturaran hasta que pagara todo lo que deb&iacute;a.</p>

<p><sup class="versenum">35&nbsp;</sup>&raquo;As&iacute; tambi&eacute;n mi Padre celestial los tratar&aacute; a ustedes, a menos que cada uno perdone de coraz&oacute;n a su hermano&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/hope/04.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 18:21-35&nbsp;</button>
    <div class="collapsed"></div>

<h2>Preguntas de descubrimiento</h2>

<ul>
	<li>&iquest;Qu&eacute; te ha llamado la atenci&oacute;n (o qu&eacute; te ha gustado m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos de las personas?</li>
	<li>&iquest;Con que personaje de la historia&nbsp;te identificas m&aacute;s y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; le impide hoy seguir a Jes&uacute;s?</li>
</ul>

<h2>Lea, Cuente y Corrija</h2>

<ul>
	<li>Vuelve a leer la historia. Pide a alguien que cuente la historia en sus propias palabras. El grupo puede ayudar si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ Resumen</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Perdonar a los dem&aacute;s es una parte muy importante en el seguimiento de Jes&uacute;s. Jes&uacute;s ayuda a Pedro a aprender que Dios quiere que perdonemos continuamente a los dem&aacute;s porque hemos experimentado el perd&oacute;n de Dios. Como hemos sido perdonados, tambi&eacute;n debemos perdonar a los dem&aacute;s. No contamos las veces que nos maltratan. Perdonamos en lugar de contar los pecados contra nosotros. Podemos hacer esto porque hemos sido perdonados por Dios por nuestros muchos pecados.</p>
</div>

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


<h2>Practicar</h2>

<ul>
	<li>Formen parejas y practiquen contando la historia unos con otros</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<h2>Elijan juntos algo para obedecer</h2>

<ul>
	<li>&iquest;C&oacute;mo podemos aplicar esta ense&ntilde;anza?</li>
	<li>&iquest;Hay alguien a quien podamos servir de forma sencilla esta semana?</li>
	<li>&iquest;Hay alguien en tu vida que crees que necesita escuchar esta historia?</li>
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


<h2>Oren</h2>

<ul>
	<li>Den&nbsp;gracias a Dios por el tiempo que han pasado juntos y p&iacute;danle que les ayude a conocerle mejor</li>
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

			<td class="social" @click="share('lesson', 'La Esperanza perdona: ', '/content/M2/spa/hope/hope04.html')">
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