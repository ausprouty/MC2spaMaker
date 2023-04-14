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
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>Personas preparadas por Dios</h1></div>
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
	<li class="back">Ejemplo: Lee <span class="popup-link" @click = "popUp('pop1')"> Romanos 11:33-36</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">33&nbsp;</sup>&iexcl;Qu&eacute; profundas son las riquezas<br />
	&nbsp;&nbsp;&nbsp;&nbsp;de la sabidur&iacute;a y del conocimiento de Dios!<br />
	&iexcl;Qu&eacute; indescifrables sus juicios<br />
	&nbsp;&nbsp;&nbsp;&nbsp;e impenetrables sus caminos!<br />
	<sup class="versenum">34&nbsp;</sup>&laquo;&iquest;Qui&eacute;n ha conocido la mente del Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;o qui&eacute;n ha sido su consejero?&raquo;<br />
	<sup class="versenum">35&nbsp;</sup>&laquo;&iquest;Qui&eacute;n le ha dado primero a Dios,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para que luego Dios le pague?&raquo;<br />
	<sup class="versenum">36&nbsp;</sup>Porque todas las cosas proceden de &eacute;l,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y existen por &eacute;l y para &eacute;l.<br />
	&iexcl;A &eacute;l sea la gloria por siempre! Am&eacute;n.</p>
	</div>
	<!-- end bible --></div>
	y canten 1- 2 alabanzas.</li>
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

<p class="back">Ejemplo: Dios cambia vidas y las usa para Su gloria. Un ejemplo es la historia de un hombre de Medio Oriente llamado Ad&aacute;n. Fue entrenado para ser un m&aacute;rtir de su religi&oacute;n. Pero todo eso cambi&oacute; una noche cuando se encontr&oacute; dram&aacute;ticamente con Cristo. Estaba tan entusiasmado con su nueva relaci&oacute;n con Cristo, que comenz&oacute; a contar su testimonio a todos sus conocidos. A pesar de ser perseguido, contin&uacute;a compartiendo el Evangelio y entrenando a otros. An&iacute;melos leyendo <span class="popup-link" @click = "popUp('pop2')"> 1 Corintios 1:24-31</span>.</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">24&nbsp;</sup>pero para los que Dios ha llamado, lo mismo jud&iacute;os que gentiles, Cristo es el poder de Dios y la sabidur&iacute;a de Dios.<sup class="versenum">25&nbsp;</sup>Pues la locura de Dios es m&aacute;s sabia que la sabidur&iacute;a humana, y la debilidad de Dios es m&aacute;s fuerte que la fuerza humana.</p>

<p><sup class="versenum">26&nbsp;</sup>Hermanos, consideren su propio llamamiento: No muchos de ustedes son sabios, seg&uacute;n criterios meramente humanos; ni son muchos los poderosos ni muchos los de noble cuna.<sup class="versenum">27&nbsp;</sup>Pero Dios escogi&oacute; lo insensato del mundo para avergonzar a los sabios, y escogi&oacute; lo d&eacute;bil del mundo para avergonzar a los poderosos.<sup class="versenum">28&nbsp;</sup>Tambi&eacute;n escogi&oacute; Dios lo m&aacute;s bajo y despreciado, y lo que no es nada, para anular lo que es,<sup class="versenum">29&nbsp;</sup>a fin de que en su presencia nadie pueda jactarse.<sup class="versenum">30&nbsp;</sup>Pero gracias a &eacute;l ustedes est&aacute;n unidos a Cristo Jes&uacute;s, a quien Dios ha hecho nuestra sabidur&iacute;a &mdash;es decir, nuestra justificaci&oacute;n, santificaci&oacute;n y redenci&oacute;n&mdash;<sup class="versenum">31&nbsp;</sup>para que, como est&aacute; escrito: &laquo;Si alguien ha de gloriarse, que se glor&iacute;e en el Se&ntilde;or&raquo;.</p>
</div>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Jes&uacute;s desafi&oacute; a cuatro hombres a seguirlo y aprender a pescar hombres. Mientras Jes&uacute;s entrenaba a sus seguidores para pescar hombres, les model&oacute; seis situaciones diferentes para ellos. La &uacute;ltima situaci&oacute;n fue para un extra&ntilde;o funcionario del gobierno que se unir&iacute;a a los cuatro hombres y se convertir&iacute;a en uno de los seguidores m&aacute;s cercanos de Jes&uacute;s.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 5:27-32</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 5:27-32</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Llamamiento de Lev&iacute;</h3>

<p><sup class="versenum">27&nbsp;</sup>Despu&eacute;s de esto sali&oacute; Jes&uacute;s y se fij&oacute; en un recaudador de impuestos llamado Lev&iacute;, sentado a la mesa donde cobraba.</p>

<p>&mdash;S&iacute;gueme &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">28&nbsp;</sup>Y Lev&iacute; se levant&oacute;, lo dej&oacute; todo y lo sigui&oacute;.</p>

<p><sup class="versenum">29&nbsp;</sup>Luego Lev&iacute; le ofreci&oacute; a Jes&uacute;s un gran banquete en su casa, y hab&iacute;a all&iacute; un grupo numeroso de recaudadores de impuestos y otras personas que estaban comiendo con ellos.<sup class="versenum">30&nbsp;</sup>Pero los fariseos y los maestros de la ley que eran de la misma secta les reclamaban a los disc&iacute;pulos de Jes&uacute;s:</p>

<p>&mdash;&iquest;Por qu&eacute; comen y beben ustedes con recaudadores de impuestos y pecadores?</p>

<p><sup class="versenum">31&nbsp;</sup>&mdash;No son los sanos los que necesitan m&eacute;dico, sino los enfermos &mdash;les contest&oacute; Jes&uacute;s&mdash;.<sup class="versenum">32&nbsp;</sup>No he venido a llamar a justos, sino a pecadores para que se arrepientan.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/109.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 5:27-32&nbsp;</button>
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
<p class="nobreak-final-final">Lee<span class="popup-link" @click = "popUp('pop3')">  Lucas 10:1-11</span>.&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, el Se&ntilde;or escogi&oacute; a otros setenta y dos para enviarlos de dos en dos delante de &eacute;l a todo pueblo y lugar adonde &eacute;l pensaba ir.<sup class="versenum">2&nbsp;</sup>&laquo;Es abundante la cosecha &mdash;les dijo&mdash;, pero son pocos los obreros. P&iacute;danle, por tanto, al Se&ntilde;or de la cosecha que mande obreros a su campo.<sup class="versenum">3&nbsp;</sup>&iexcl;Vayan ustedes! Miren que los env&iacute;o como corderos en medio de lobos.<sup class="versenum">4&nbsp;</sup>No lleven monedero ni bolsa ni sandalias; ni se detengan a saludar a nadie por el camino.</p>

<p><sup class="versenum">5&nbsp;</sup>&raquo;Cuando entren en una casa, digan primero: &ldquo;Paz a esta casa&rdquo;.<sup class="versenum">6&nbsp;</sup>Si hay all&iacute; alguien digno de paz, gozar&aacute; de ella; y, si no, la bendici&oacute;n no se cumplir&aacute;.<sup class="versenum">7&nbsp;</sup>Qu&eacute;dense en esa casa, y coman y beban de lo que ellos tengan, porque el trabajador tiene derecho a su sueldo. No anden de casa en casa.</p>

<p><sup class="versenum">8&nbsp;</sup>&raquo;Cuando entren en un pueblo y los reciban, coman lo que les sirvan.<sup class="versenum">9&nbsp;</sup>Sanen a los enfermos que encuentren all&iacute; y d&iacute;ganles: &ldquo;El reino de Dios ya est&aacute; cerca de ustedes&rdquo;.<sup class="versenum">10&nbsp;</sup>Pero, cuando entren en un pueblo donde no los reciban, salgan a las plazas y digan:<sup class="versenum">11&nbsp;</sup>&ldquo;Aun el polvo de este pueblo, que se nos ha pegado a los pies, nos lo sacudimos en protesta contra ustedes. Pero tengan por seguro que ya est&aacute; cerca el reino de Dios&rdquo;.</p>
<!-- end bible --></div>

<p>Jes&uacute;s envi&oacute; a sus seguidores a hacer las mismas cosas que &Eacute;l hab&iacute;a estado haciendo: orar por las personas, cuidar de sus necesidades y compartir acerca del sobre Reino. Esto se puede resumir como Orar, Cuidar y, Compartir. &Eacute;L se multiplic&oacute; as&iacute; mismo entrenando y enviando nuevos obreros. La Persona de Paz es una persona preparada por Dios que te recibir&aacute; a ti y a tu mensaje y a trav&eacute;s de sus relaciones, abrir nuevas redes de personas para al Evangelio.</p>

<p>Para mayor enriquecimiento: Estudia las siguientes Personas de Paz y habla con otro miembro del grupo: <span class="popup-link" @click = "popUp('pop4')"> Lucas 19:1-10</span>,&nbsp;</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Jes&uacute;s lleg&oacute; a Jeric&oacute; y comenz&oacute; a cruzar la ciudad.<sup class="versenum">2&nbsp;</sup>Resulta que hab&iacute;a all&iacute; un hombre llamado Zaqueo, jefe de los recaudadores de impuestos, que era muy rico.<sup class="versenum">3&nbsp;</sup>Estaba tratando de ver qui&eacute;n era Jes&uacute;s, pero la multitud se lo imped&iacute;a, pues era de baja estatura.<sup class="versenum">4&nbsp;</sup>Por eso se adelant&oacute; corriendo y se subi&oacute; a un &aacute;rbol sic&oacute;moro para poder verlo, ya que Jes&uacute;s iba a pasar por all&iacute;.</p>

<p><sup class="versenum">5&nbsp;</sup>Llegando al lugar, Jes&uacute;s mir&oacute; hacia arriba y le dijo:</p>

<p>&mdash;Zaqueo, baja en seguida. Tengo que quedarme hoy en tu casa.</p>

<p><sup class="versenum">6&nbsp;</sup>As&iacute; que se apresur&oacute; a bajar y, muy contento, recibi&oacute; a Jes&uacute;s en su casa.</p>

<p><sup class="versenum">7&nbsp;</sup>Al ver esto, todos empezaron a murmurar: &laquo;Ha ido a hospedarse con un pecador&raquo;.</p>

<p><sup class="versenum">8&nbsp;</sup>Pero Zaqueo dijo resueltamente:</p>

<p>&mdash;Mira, Se&ntilde;or: Ahora mismo voy a dar a los pobres la mitad de mis bienes y, si en algo he defraudado a alguien, le devolver&eacute; cuatro veces la cantidad que sea.</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;Hoy ha llegado la salvaci&oacute;n a esta casa &mdash;le dijo Jes&uacute;s&mdash;, ya que este tambi&eacute;n es hijo de Abraham.<sup class="versenum">10&nbsp;</sup>Porque el Hijo del hombre vino a buscar y a salvar lo que se hab&iacute;a perdido.</p>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Marcos 5:14-20</span>,

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">14&nbsp;</sup>Los que cuidaban los cerdos salieron huyendo y dieron la noticia en el pueblo y por los campos, y la gente fue a ver lo que hab&iacute;a pasado.<sup class="versenum">15&nbsp;</sup>Llegaron adonde estaba Jes&uacute;s y, cuando vieron al que hab&iacute;a estado pose&iacute;do por la legi&oacute;n de demonios, sentado, vestido y en su sano juicio, tuvieron miedo.<sup class="versenum">16&nbsp;</sup>Los que hab&iacute;an presenciado estos hechos le contaron a la gente lo que hab&iacute;a sucedido con el endemoniado y con los cerdos.<sup class="versenum">17&nbsp;</sup>Entonces la gente comenz&oacute; a suplicarle a Jes&uacute;s que se fuera de la regi&oacute;n.</p>

<p><sup class="versenum">18&nbsp;</sup>Mientras sub&iacute;a Jes&uacute;s a la barca, el que hab&iacute;a estado endemoniado le rogaba que le permitiera acompa&ntilde;arlo.<sup class="versenum">19&nbsp;</sup>Jes&uacute;s no se lo permiti&oacute;, sino que le dijo:</p>

<p>&mdash;Vete a tu casa, a los de tu familia, y diles todo lo que el Se&ntilde;or ha hecho por ti y c&oacute;mo te ha tenido compasi&oacute;n.</p>

<p><sup class="versenum">20&nbsp;</sup>As&iacute; que el hombre se fue y se puso a proclamar en Dec&aacute;polis lo mucho que Jes&uacute;s hab&iacute;a hecho por &eacute;l. Y toda la gente se qued&oacute; asombrada.</p>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop6')"> &nbsp;Juan 4:1-42</span>,&nbsp;

<div class="popup invisible" id="pop6"><!-- begin bible -->
<h3>Jes&uacute;s y la samaritana</h3>

<p><sup class="versenum">1 </sup>Jes&uacute;s se enter&oacute; de que los fariseos sab&iacute;an que &eacute;l estaba haciendo y bautizando m&aacute;s disc&iacute;pulos que Juan<sup class="versenum">2&nbsp;</sup>(aunque en realidad no era Jes&uacute;s quien bautizaba, sino sus disc&iacute;pulos).<sup class="versenum">3&nbsp;</sup>Por eso se fue de Judea y volvi&oacute; otra vez a Galilea.<sup class="versenum">4&nbsp;</sup>Como ten&iacute;a que pasar por Samaria,<sup class="versenum">5&nbsp;</sup>lleg&oacute; a un pueblo samaritano llamado Sicar, cerca del terreno que Jacob le hab&iacute;a dado a su hijo Jos&eacute;.<sup class="versenum">6&nbsp;</sup>All&iacute; estaba el pozo de Jacob. Jes&uacute;s, fatigado del camino, se sent&oacute; junto al pozo. Era cerca del mediod&iacute;a.<sup class="versenum">7-8&nbsp;</sup>Sus disc&iacute;pulos hab&iacute;an ido al pueblo a comprar comida.</p>

<p>En eso lleg&oacute; a sacar agua una mujer de Samaria, y Jes&uacute;s le dijo:</p>

<p>&mdash;Dame un poco de agua.</p>

<p><sup class="versenum">9&nbsp;</sup>Pero, como los jud&iacute;os no usan nada en com&uacute;n con los samaritanos, la mujer le respondi&oacute;:</p>

<p>&mdash;&iquest;C&oacute;mo se te ocurre pedirme agua, si t&uacute; eres jud&iacute;o y yo soy samaritana?</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;Si supieras lo que Dios puede dar, y conocieras al que te est&aacute; pidiendo agua &mdash;contest&oacute; Jes&uacute;s&mdash;, t&uacute; le habr&iacute;as pedido a &eacute;l, y &eacute;l te habr&iacute;a dado agua que da vida.</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Se&ntilde;or, ni siquiera tienes con qu&eacute; sacar agua, y el pozo es muy hondo; &iquest;de d&oacute;nde, pues, vas a sacar esa agua que da vida?<sup class="versenum">12&nbsp;</sup>&iquest;Acaso eres t&uacute; superior a nuestro padre Jacob, que nos dej&oacute; este pozo, del cual bebieron &eacute;l, sus hijos y su ganado?</p>

<p><sup class="versenum">13&nbsp;</sup>&mdash;Todo el que beba de esta agua volver&aacute; a tener sed &mdash;respondi&oacute; Jes&uacute;s&mdash;,<sup class="versenum">14&nbsp;</sup>pero el que beba del agua que yo le dar&eacute; no volver&aacute; a tener sed jam&aacute;s, sino que dentro de &eacute;l esa agua se convertir&aacute; en un manantial del que brotar&aacute; vida eterna.</p>

<p><sup class="versenum">15&nbsp;</sup>&mdash;Se&ntilde;or, dame de esa agua para que no vuelva a tener sed ni siga viniendo aqu&iacute; a sacarla.</p>

<p><sup class="versenum">16&nbsp;</sup>&mdash;Ve a llamar a tu esposo, y vuelve ac&aacute; &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">17&nbsp;</sup>&mdash;No tengo esposo &mdash;respondi&oacute; la mujer.</p>

<p>&mdash;Bien has dicho que no tienes esposo.<sup class="versenum">18&nbsp;</sup>Es cierto que has tenido cinco, y el que ahora tienes no es tu esposo. En esto has dicho la verdad.</p>

<p><sup class="versenum">19&nbsp;</sup>&mdash;Se&ntilde;or, me doy cuenta de que t&uacute; eres profeta.<sup class="versenum">20&nbsp;</sup>Nuestros antepasados adoraron en este monte, pero ustedes los jud&iacute;os dicen que el lugar donde debemos adorar est&aacute; en Jerusal&eacute;n.</p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;Cr&eacute;eme, mujer, que se acerca la hora en que ni en este monte ni en Jerusal&eacute;n adorar&aacute;n ustedes al Padre.<sup class="versenum">22&nbsp;</sup>Ahora ustedes adoran lo que no conocen; nosotros adoramos lo que conocemos, porque la salvaci&oacute;n proviene de los jud&iacute;os.<sup class="versenum">23&nbsp;</sup>Pero se acerca la hora, y ha llegado ya, en que los verdaderos adoradores rendir&aacute;n culto al Padre en esp&iacute;ritu y en verdad, porque as&iacute; quiere el Padre que sean los que le adoren.<sup class="versenum">24&nbsp;</sup>Dios es esp&iacute;ritu, y quienes lo adoran deben hacerlo en esp&iacute;ritu y en verdad.</p>

<p><sup class="versenum">25&nbsp;</sup>&mdash;S&eacute; que viene el Mes&iacute;as, al que llaman el Cristo &mdash;respondi&oacute; la mujer&mdash;. Cuando &eacute;l venga nos explicar&aacute; todas las cosas.</p>

<p><sup class="versenum">26&nbsp;</sup>&mdash;Ese soy yo, el que habla contigo &mdash;le dijo Jes&uacute;s.</p>

<h3>Los disc&iacute;pulos vuelven a reunirse con Jes&uacute;s</h3>

<p><sup class="versenum">27&nbsp;</sup>En esto llegaron sus disc&iacute;pulos y se sorprendieron de verlo hablando con una mujer, aunque ninguno le pregunt&oacute;: &laquo;&iquest;Qu&eacute; pretendes?&raquo; o &laquo;&iquest;De qu&eacute; hablas con ella?&raquo;</p>

<p><sup class="versenum">28&nbsp;</sup>La mujer dej&oacute; su c&aacute;ntaro, volvi&oacute; al pueblo y le dec&iacute;a a la gente:</p>

<p><sup class="versenum">29&nbsp;</sup>&mdash;Vengan a ver a un hombre que me ha dicho todo lo que he hecho. &iquest;No ser&aacute; este el Cristo?</p>

<p><sup class="versenum">30&nbsp;</sup>Salieron del pueblo y fueron a ver a Jes&uacute;s.<sup class="versenum">31&nbsp;</sup>Mientras tanto, sus disc&iacute;pulos le insist&iacute;an:</p>

<p>&mdash;Rab&iacute;, come algo.</p>

<p><sup class="versenum">32&nbsp;</sup>&mdash;Yo tengo un alimento que ustedes no conocen &mdash;replic&oacute; &eacute;l.</p>

<p><sup class="versenum">33&nbsp;</sup>&laquo;&iquest;Le habr&aacute;n tra&iacute;do algo de comer?&raquo;, comentaban entre s&iacute; los disc&iacute;pulos.</p>

<p><sup class="versenum">34&nbsp;</sup>&mdash;Mi alimento es hacer la voluntad del que me envi&oacute; y terminar su obra &mdash;les dijo Jes&uacute;s&mdash;.<sup class="versenum">35&nbsp;</sup>&iquest;No dicen ustedes: &ldquo;Todav&iacute;a faltan cuatro meses para la cosecha&rdquo;? Yo les digo: &iexcl;Abran los ojos y miren los campos sembrados! Ya la cosecha est&aacute; madura;<sup class="versenum">36&nbsp;</sup>ya el segador recibe su salario y recoge el fruto para vida eterna. Ahora tanto el sembrador como el segador se alegran juntos.<sup class="versenum">37&nbsp;</sup>Porque como dice el refr&aacute;n: &ldquo;Uno es el que siembra y otro el que cosecha&rdquo;.<sup class="versenum">38&nbsp;</sup>Yo los he enviado a ustedes a cosechar lo que no les cost&oacute; ning&uacute;n trabajo. Otros se han fatigado trabajando, y ustedes han cosechado el fruto de ese trabajo.</p>

<p><sup class="versenum">39&nbsp;</sup>Muchos de los samaritanos que viv&iacute;an en aquel pueblo creyeron en &eacute;l por el testimonio que daba la mujer: &laquo;Me dijo todo lo que he hecho&raquo;.<sup class="versenum">40&nbsp;</sup>As&iacute; que cuando los samaritanos fueron a su encuentro le insistieron en que se quedara con ellos. Jes&uacute;s permaneci&oacute; all&iacute; dos d&iacute;as,<sup class="versenum">41&nbsp;</sup>y muchos m&aacute;s llegaron a creer por lo que &eacute;l mismo dec&iacute;a.</p>

<p><sup class="versenum">42&nbsp;</sup>&mdash;Ya no creemos solo por lo que t&uacute; dijiste &mdash;le dec&iacute;an a la mujer&mdash;; ahora lo hemos o&iacute;do nosotros mismos, y sabemos que verdaderamente este es el Salvador del mundo.</p>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop7')"> &nbsp;Hechos 16:13-15</span>.

<div class="popup invisible" id="pop7"><!-- begin bible -->
<p><sup class="versenum">13&nbsp;</sup>El s&aacute;bado salimos a las afueras de la ciudad, y fuimos por la orilla del r&iacute;o, donde esper&aacute;bamos encontrar un lugar de oraci&oacute;n. Nos sentamos y nos pusimos a conversar con las mujeres que se hab&iacute;an reunido.<sup class="versenum">14&nbsp;</sup>Una de ellas, que se llamaba Lidia, adoraba a Dios. Era de la ciudad de Tiatira y vend&iacute;a telas de p&uacute;rpura. Mientras escuchaba, el Se&ntilde;or le abri&oacute; el coraz&oacute;n para que respondiera al mensaje de Pablo.<sup class="versenum">15&nbsp;</sup>Cuando fue bautizada con su familia, nos hizo la siguiente invitaci&oacute;n: &laquo;Si ustedes me consideran creyente en el Se&ntilde;or, vengan a hospedarse en mi casa&raquo;. Y nos persuadi&oacute;.</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Repasa usando la Pregunta Asombrosa y cuidando a los dem&aacute;s</li>
	<li>Practique cualquier habilidad o tema de lecciones anteriores seg&uacute;n sea necesario.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana.
	<ul>
		<li>Usa lo que aprendiste esta semana con al menos 3</li>
	</ul>
	</li>
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


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Personas preparadas por Dios: ', '/content/M2/spa/multiply1/multiply109.html')">
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