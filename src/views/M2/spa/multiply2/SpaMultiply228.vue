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
                        <div class="chapter_number ltr"><h1>28.</h1></div>
                        <div class="chapter_title ltr"><h1>El plan del Padre</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 6:27-49</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 6:27-49</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>El amor a los enemigos</h3>

<p><sup class="versenum">27&nbsp;</sup>&raquo;Pero a ustedes que me escuchan les digo: Amen a sus enemigos, hagan bien a quienes los odian,<sup class="versenum">28&nbsp;</sup>bendigan a quienes los maldicen, oren por quienes los maltratan.<sup class="versenum">29&nbsp;</sup>Si alguien te pega en una mejilla, vu&eacute;lvele tambi&eacute;n la otra. Si alguien te quita la camisa, no le impidas que se lleve tambi&eacute;n la capa.<sup class="versenum">30&nbsp;</sup>Dale a todo el que te pida y, si alguien se lleva lo que es tuyo, no se lo reclames.<sup class="versenum">31&nbsp;</sup>Traten a los dem&aacute;s tal y como quieren que ellos los traten a ustedes.</p>

<p><sup class="versenum">32&nbsp;</sup>&raquo;&iquest;Qu&eacute; m&eacute;rito tienen ustedes al amar a quienes los aman? Aun los pecadores lo hacen as&iacute;.<sup class="versenum">33&nbsp;</sup>&iquest;Y qu&eacute; m&eacute;rito tienen ustedes al hacer bien a quienes les hacen bien? Aun los pecadores act&uacute;an as&iacute;.<sup class="versenum">34&nbsp;</sup>&iquest;Y qu&eacute; m&eacute;rito tienen ustedes al dar prestado a quienes pueden corresponderles? Aun los pecadores se prestan entre s&iacute;, esperando recibir el mismo trato.<sup class="versenum">35&nbsp;</sup>Ustedes, por el contrario, amen a sus enemigos, h&aacute;ganles bien y denles prestado sin esperar nada a cambio. As&iacute; tendr&aacute;n una gran recompensa y ser&aacute;n hijos del Alt&iacute;simo, porque &eacute;l es bondadoso con los ingratos y malvados.<sup class="versenum">36&nbsp;</sup>Sean compasivos, as&iacute; como su Padre es compasivo.</p>

<h3>El juzgar a los dem&aacute;s</h3>

<p><sup class="versenum">37&nbsp;</sup>&raquo;No juzguen, y no se les juzgar&aacute;. No condenen, y no se les condenar&aacute;. Perdonen, y se les perdonar&aacute;.<sup class="versenum">38&nbsp;</sup>Den, y se les dar&aacute;: se les echar&aacute; en el regazo una medida llena, apretada, sacudida y desbordante. Porque con la medida que midan a otros, se les medir&aacute; a ustedes&raquo;.</p>

<p><sup class="versenum">39&nbsp;</sup>Tambi&eacute;n les cont&oacute; esta par&aacute;bola: &laquo;&iquest;Acaso puede un ciego guiar a otro ciego? &iquest;No caer&aacute;n ambos en el hoyo?<sup class="versenum">40&nbsp;</sup>El disc&iacute;pulo no est&aacute; por encima de su maestro, pero todo el que haya completado su aprendizaje, a lo sumo llega al nivel de su maestro.</p>

<p><sup class="versenum">41&nbsp;</sup>&raquo;&iquest;Por qu&eacute; te fijas en la astilla que tiene tu hermano en el ojo y no le das importancia a la viga que tienes en el tuyo?<sup class="versenum">42&nbsp;</sup>&iquest;C&oacute;mo puedes decirle a tu hermano: &ldquo;Hermano, d&eacute;jame sacarte la astilla del ojo&rdquo;, cuando t&uacute; mismo no te das cuenta de la viga en el tuyo? &iexcl;Hip&oacute;crita! Saca primero la viga de tu propio ojo, y entonces ver&aacute;s con claridad para sacar la astilla del ojo de tu hermano.</p>

<h3>El &aacute;rbol y su fruto</h3>

<p><sup class="versenum">43&nbsp;</sup>&raquo;Ning&uacute;n &aacute;rbol bueno da fruto malo; tampoco da buen fruto el &aacute;rbol malo.<sup class="versenum">44&nbsp;</sup>A cada &aacute;rbol se le reconoce por su propio fruto. No se recogen higos de los espinos ni se cosechan uvas de las zarzas.<sup class="versenum">45&nbsp;</sup>El que es bueno, de la bondad que atesora en el coraz&oacute;n produce el bien; pero el que es malo, de su maldad produce el mal, porque de lo que abunda en el coraz&oacute;n habla la boca.</p>

<h3>El prudente y el insensato</h3>

<p><sup class="versenum">46&nbsp;</sup>&raquo;&iquest;Por qu&eacute; me llaman ustedes &ldquo;Se&ntilde;or, Se&ntilde;or&rdquo;, y no hacen lo que les digo?<sup class="versenum">47&nbsp;</sup>Voy a decirles a qui&eacute;n se parece todo el que viene a m&iacute;, y oye mis palabras y las pone en pr&aacute;ctica:<sup class="versenum">48&nbsp;</sup>Se parece a un hombre que, al construir una casa, cav&oacute; bien hondo y puso el cimiento sobre la roca. De manera que cuando vino una inundaci&oacute;n, el torrente azot&oacute; aquella casa, pero no pudo ni siquiera hacerla tambalear porque estaba bien construida.<sup class="versenum">49&nbsp;</sup>Pero el que oye mis palabras y no las pone en pr&aacute;ctica se parece a un hombre que construy&oacute; una casa sobre tierra y sin cimientos. Tan pronto como la azot&oacute; el torrente, la casa se derrumb&oacute;, y el desastre fue terrible&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/228.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 6:27-49&nbsp;</button>
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
<p class="up">Jes&uacute;s explica m&aacute;s acerca de la vida del reino a los disc&iacute;pulos. Parte del plan para la expansi&oacute;n del Reino es amar a los dem&aacute;s, incluso a tus enemigos. Es un amor que no espera nada a cambio. Es un amor radical, como Dios, que cambiar&aacute; el mundo. Parte de amar a los dem&aacute;s incluye dejar de juzgar a otras personas y dejar de condenar a otras personas por sus acciones. En cambio, extienda el perd&oacute;n en el nombre de Jes&uacute;s, no porque lo merezcan, sino porque Jes&uacute;s nos instruye a perdonar. Deber&iacute;amos tomarnos alg&uacute;n tiempo para examinar nuestras propias vidas. &Eacute;l instruye a los l&iacute;deres que &quot;los ciegos no pueden guiar a los ciegos&quot;. Jes&uacute;s espera que los disc&iacute;pulos modelen este estilo de vida. &Eacute;l les recuerda que necesitan observar Su vida y ministerio de cerca. &quot;No me llames Se&ntilde;or si no vas a hacer lo que yo digo&quot;.&quot;</p>

<p class="up">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Mateo 5:17-8:1</span></p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<h3>El cumplimiento de la ley</h3>

<p><sup class="versenum">17&nbsp;</sup>&raquo;No piensen que he venido a anular la ley o los profetas; no he venido a anularlos, sino a darles cumplimiento.<sup class="versenum">18&nbsp;</sup>Les aseguro que mientras existan el cielo y la tierra, ni una letra ni una tilde de la ley desaparecer&aacute;n hasta que todo se haya cumplido.<sup class="versenum">19&nbsp;</sup>Todo el que infrinja uno solo de estos mandamientos, por peque&ntilde;o que sea, y ense&ntilde;e a otros a hacer lo mismo, ser&aacute; considerado el m&aacute;s peque&ntilde;o en el reino de los cielos; pero el que los practique y ense&ntilde;e ser&aacute; considerado grande en el reino de los cielos.<sup class="versenum">20&nbsp;</sup>Porque les digo a ustedes que no van a entrar en el reino de los cielos a menos que su justicia supere a la de los fariseos y de los maestros de la ley.</p>

<h3>El homicidio</h3>

<p><sup class="versenum">21&nbsp;</sup>&raquo;Ustedes han o&iacute;do que se dijo a sus antepasados: &ldquo;No mates, y todo el que mate quedar&aacute; sujeto al juicio del tribunal&rdquo;.<sup class="versenum">22&nbsp;</sup>Pero yo les digo que todo el que se enoje con su hermano quedar&aacute; sujeto al juicio del tribunal. Es m&aacute;s, cualquiera que insulte a su hermano quedar&aacute; sujeto al juicio del Consejo. Y cualquiera que lo maldiga quedar&aacute; sujeto al fuego del infierno.</p>

<p><sup class="versenum">23&nbsp;</sup>&raquo;Por lo tanto, si est&aacute;s presentando tu ofrenda en el altar y all&iacute; recuerdas que tu hermano tiene algo contra ti,<sup class="versenum">24&nbsp;</sup>deja tu ofrenda all&iacute; delante del altar. Ve primero y reconc&iacute;liate con tu hermano; luego vuelve y presenta tu ofrenda.</p>

<p><sup class="versenum">25&nbsp;</sup>&raquo;Si tu adversario te va a denunciar, llega a un acuerdo con &eacute;l lo m&aacute;s pronto posible. Hazlo mientras vayan de camino al juzgado, no sea que te entregue al juez, y el juez al guardia, y te echen en la c&aacute;rcel.<sup class="versenum">26&nbsp;</sup>Te aseguro que no saldr&aacute;s de all&iacute; hasta que pagues el &uacute;ltimo centavo.</p>

<h3>El adulterio</h3>

<p><sup class="versenum">27&nbsp;</sup>&raquo;Ustedes han o&iacute;do que se dijo: &ldquo;No cometas adulterio&rdquo;.<sup class="versenum">28&nbsp;</sup>Pero yo les digo que cualquiera que mira a una mujer y la codicia ya ha cometido adulterio con ella en el coraz&oacute;n.<sup class="versenum">29&nbsp;</sup>Por tanto, si tu ojo derecho te hace pecar, s&aacute;catelo y t&iacute;ralo. M&aacute;s te vale perder una sola parte de tu cuerpo, y no que todo &eacute;l sea arrojado al infierno.<sup class="versenum">30&nbsp;</sup>Y, si tu mano derecha te hace pecar, c&oacute;rtatela y arr&oacute;jala. M&aacute;s te vale perder una sola parte de tu cuerpo, y no que todo &eacute;l vaya al infierno.</p>

<h3>El divorcio</h3>

<p><sup class="versenum">31&nbsp;</sup>&raquo;Se ha dicho: &ldquo;El que repudia a su esposa debe darle un certificado de divorcio&rdquo;.<sup class="versenum">32&nbsp;</sup>Pero yo les digo que, excepto en caso de inmoralidad sexual, todo el que se divorcia de su esposa la induce a cometer adulterio, y el que se casa con la divorciada comete adulterio tambi&eacute;n.</p>

<h3>Los juramentos</h3>

<p><sup class="versenum">33&nbsp;</sup>&raquo;Tambi&eacute;n han o&iacute;do que se dijo a sus antepasados: &ldquo;No faltes a tu juramento, sino cumple con tus promesas al Se&ntilde;or&rdquo;.<sup class="versenum">34&nbsp;</sup>Pero yo les digo: No juren de ning&uacute;n modo: ni por el cielo, porque es el trono de Dios;<sup class="versenum">35&nbsp;</sup>ni por la tierra, porque es el estrado de sus pies; ni por Jerusal&eacute;n, porque es la ciudad del gran Rey.<sup class="versenum">36&nbsp;</sup>Tampoco jures por tu cabeza, porque no puedes hacer que ni uno solo de tus cabellos se vuelva blanco o negro.<sup class="versenum">37&nbsp;</sup>Cuando ustedes digan &ldquo;s&iacute;&rdquo;, que sea realmente s&iacute;; y, cuando digan &ldquo;no&rdquo;, que sea no. Cualquier cosa de m&aacute;s, proviene del maligno.</p>

<h3>Ojo por ojo</h3>

<p><sup class="versenum">38&nbsp;</sup>&raquo;Ustedes han o&iacute;do que se dijo: &ldquo;Ojo por ojo y diente por diente&rdquo;.<sup class="versenum">39&nbsp;</sup>Pero yo les digo: No resistan al que les haga mal. Si alguien te da una bofetada en la mejilla derecha, vu&eacute;lvele tambi&eacute;n la otra.<sup class="versenum">40&nbsp;</sup>Si alguien te pone pleito para quitarte la camisa, d&eacute;jale tambi&eacute;n la capa.<sup class="versenum">41&nbsp;</sup>Si alguien te obliga a llevarle la carga un kil&oacute;metro, ll&eacute;vasela dos.<sup class="versenum">42&nbsp;</sup>Al que te pida, dale; y al que quiera tomar de ti prestado, no le vuelvas la espalda.</p>

<h3>El amor a los enemigos</h3>

<p><sup class="versenum">43&nbsp;</sup>&raquo;Ustedes han o&iacute;do que se dijo: &ldquo;Ama a tu pr&oacute;jimo y odia a tu enemigo&rdquo;.<sup class="versenum">44&nbsp;</sup>Pero yo les digo: Amen a sus enemigos y oren por quienes los persiguen,<sup class="versenum">45&nbsp;</sup>para que sean hijos de su Padre que est&aacute; en el cielo. &Eacute;l hace que salga el sol sobre malos y buenos, y que llueva sobre justos e injustos.<sup class="versenum">46&nbsp;</sup>Si ustedes aman solamente a quienes los aman, &iquest;qu&eacute; recompensa recibir&aacute;n? &iquest;Acaso no hacen eso hasta los recaudadores de impuestos?<sup class="versenum">47&nbsp;</sup>Y, si saludan a sus hermanos solamente, &iquest;qu&eacute; de m&aacute;s hacen ustedes? &iquest;Acaso no hacen esto hasta los gentiles?<sup class="versenum">48&nbsp;</sup>Por tanto, sean perfectos, as&iacute; como su Padre celestial es perfecto.</p>

<h3>El dar a los necesitados</h3>

<p><sup class="versenum">1 </sup>&raquo;Cu&iacute;dense de no hacer sus obras de justicia delante de la gente para llamar la atenci&oacute;n. Si act&uacute;an as&iacute;, su Padre que est&aacute; en el cielo no les dar&aacute; ninguna recompensa.</p>

<p><sup class="versenum">2&nbsp;</sup>&raquo;Por eso, cuando des a los necesitados, no lo anuncies al son de trompeta, como lo hacen los hip&oacute;critas en las sinagogas y en las calles para que la gente les rinda homenaje. Les aseguro que ellos ya han recibido toda su recompensa.<sup class="versenum">3&nbsp;</sup>M&aacute;s bien, cuando des a los necesitados, que no se entere tu mano izquierda de lo que hace la derecha,<sup class="versenum">4&nbsp;</sup>para que tu limosna sea en secreto. As&iacute; tu Padre, que ve lo que se hace en secreto, te recompensar&aacute;.</p>

<h3>La oraci&oacute;n</h3>

<p><sup class="versenum">5&nbsp;</sup>&raquo;Cuando oren, no sean como los hip&oacute;critas, porque a ellos les encanta orar de pie en las sinagogas y en las esquinas de las plazas para que la gente los vea. Les aseguro que ya han obtenido toda su recompensa.<sup class="versenum">6&nbsp;</sup>Pero t&uacute;, cuando te pongas a orar, entra en tu cuarto, cierra la puerta y ora a tu Padre, que est&aacute; en lo secreto. As&iacute; tu Padre, que ve lo que se hace en secreto, te recompensar&aacute;.<sup class="versenum">7&nbsp;</sup>Y al orar, no hablen solo por hablar como hacen los gentiles, porque ellos se imaginan que ser&aacute;n escuchados por sus muchas palabras.<sup class="versenum">8&nbsp;</sup>No sean como ellos, porque su Padre sabe lo que ustedes necesitan antes de que se lo pidan.</p>

<p><sup class="versenum">9&nbsp;</sup>&raquo;Ustedes deben orar as&iacute;:</p>

<p>&raquo;&ldquo;Padre nuestro que est&aacute;s en el cielo,<br />
santificado sea tu nombre,<br />
<sup class="versenum">10&nbsp;</sup>venga tu reino,<br />
h&aacute;gase tu voluntad<br />
&nbsp;&nbsp;&nbsp;&nbsp;en la tierra como en el cielo.<br />
<sup class="versenum">11&nbsp;</sup>Danos hoy nuestro pan cotidiano.<br />
<sup class="versenum">12&nbsp;</sup>Perd&oacute;nanos nuestras deudas,<br />
&nbsp;&nbsp;&nbsp;&nbsp;como tambi&eacute;n nosotros hemos perdonado a nuestros deudores.<br />
<sup class="versenum">13&nbsp;</sup>Y no nos dejes caer en tentaci&oacute;n,<br />
sino l&iacute;branos del maligno&rdquo;.</p>
</div>

<p><sup class="versenum">14&nbsp;</sup>&raquo;Porque, si perdonan a otros sus ofensas, tambi&eacute;n los perdonar&aacute; a ustedes su Padre celestial.<sup class="versenum">15&nbsp;</sup>Pero, si no perdonan a otros sus ofensas, tampoco su Padre les perdonar&aacute; a ustedes las suyas.</p>

<h3>El ayuno</h3>

<p><sup class="versenum">16&nbsp;</sup>&raquo;Cuando ayunen, no pongan cara triste como hacen los hip&oacute;critas, que demudan sus rostros para mostrar que est&aacute;n ayunando. Les aseguro que estos ya han obtenido toda su recompensa.<sup class="versenum">17&nbsp;</sup>Pero t&uacute;, cuando ayunes, perf&uacute;mate la cabeza y l&aacute;vate la cara<sup class="versenum">18&nbsp;</sup>para que no sea evidente ante los dem&aacute;s que est&aacute;s ayunando, sino solo ante tu Padre, que est&aacute; en lo secreto; y tu Padre, que ve lo que se hace en secreto, te recompensar&aacute;.</p>

<h3>Tesoros en el cielo</h3>

<p><sup class="versenum">19&nbsp;</sup>&raquo;No acumulen para s&iacute; tesoros en la tierra, donde la polilla y el &oacute;xido destruyen, y donde los ladrones se meten a robar.<sup class="versenum">20&nbsp;</sup>M&aacute;s bien, acumulen para s&iacute; tesoros en el cielo, donde ni la polilla ni el &oacute;xido carcomen, ni los ladrones se meten a robar.<sup class="versenum">21&nbsp;</sup>Porque donde est&eacute; tu tesoro, all&iacute; estar&aacute; tambi&eacute;n tu coraz&oacute;n.</p>

<p><sup class="versenum">22&nbsp;</sup>&raquo;El ojo es la l&aacute;mpara del cuerpo. Por tanto, si tu visi&oacute;n es clara, todo tu ser disfrutar&aacute; de la luz.<sup class="versenum">23&nbsp;</sup>Pero, si tu visi&oacute;n est&aacute; nublada, todo tu ser estar&aacute; en oscuridad. Si la luz que hay en ti es oscuridad, &iexcl;qu&eacute; densa ser&aacute; esa oscuridad!</p>

<p><sup class="versenum">24&nbsp;</sup>&raquo;Nadie puede servir a dos se&ntilde;ores, pues menospreciar&aacute; a uno y amar&aacute; al otro, o querr&aacute; mucho a uno y despreciar&aacute; al otro. No se puede servir a la vez a Dios y a las riquezas.</p>

<h3>De nada sirve preocuparse</h3>

<p><sup class="versenum">25&nbsp;</sup>&raquo;Por eso les digo: No se preocupen por su vida, qu&eacute; comer&aacute;n o beber&aacute;n; ni por su cuerpo, c&oacute;mo se vestir&aacute;n. &iquest;No tiene la vida m&aacute;s valor que la comida, y el cuerpo m&aacute;s que la ropa?<sup class="versenum">26&nbsp;</sup>F&iacute;jense en las aves del cielo: no siembran ni cosechan ni almacenan en graneros; sin embargo, el Padre celestial las alimenta. &iquest;No valen ustedes mucho m&aacute;s que ellas?<sup class="versenum">27&nbsp;</sup>&iquest;Qui&eacute;n de ustedes, por mucho que se preocupe, puede a&ntilde;adir una sola hora al curso de su vida?</p>

<p><sup class="versenum">28&nbsp;</sup>&raquo;&iquest;Y por qu&eacute; se preocupan por la ropa? Observen c&oacute;mo crecen los lirios del campo. No trabajan ni hilan;<sup class="versenum">29&nbsp;</sup>sin embargo, les digo que ni siquiera Salom&oacute;n, con todo su esplendor, se vest&iacute;a como uno de ellos.<sup class="versenum">30&nbsp;</sup>Si as&iacute; viste Dios a la hierba que hoy est&aacute; en el campo y ma&ntilde;ana es arrojada al horno, &iquest;no har&aacute; mucho m&aacute;s por ustedes, gente de poca fe?<sup class="versenum">31&nbsp;</sup>As&iacute; que no se preocupen diciendo: &ldquo;&iquest;Qu&eacute; comeremos?&rdquo; o &ldquo;&iquest;Qu&eacute; beberemos?&rdquo; o &ldquo;&iquest;Con qu&eacute; nos vestiremos?&rdquo;<sup class="versenum">32&nbsp;</sup>Los paganos andan tras todas estas cosas, pero el Padre celestial sabe que ustedes las necesitan.<sup class="versenum">33&nbsp;</sup>M&aacute;s bien, busquen primeramente el reino de Dios y su justicia, y todas estas cosas les ser&aacute;n a&ntilde;adidas.<sup class="versenum">34&nbsp;</sup>Por lo tanto, no se angustien por el ma&ntilde;ana, el cual tendr&aacute; sus propios afanes. Cada d&iacute;a tiene ya sus problemas.</p>

<h3>El juzgar a los dem&aacute;s</h3>

<p><sup class="versenum">1 </sup>&raquo;No juzguen a nadie, para que nadie los juzgue a ustedes.<sup class="versenum">2&nbsp;</sup>Porque tal como juzguen se les juzgar&aacute;, y con la medida que midan a otros, se les medir&aacute; a ustedes.</p>

<p><sup class="versenum">3&nbsp;</sup>&raquo;&iquest;Por qu&eacute; te fijas en la astilla que tiene tu hermano en el ojo, y no le das importancia a la viga que est&aacute; en el tuyo?<sup class="versenum">4&nbsp;</sup>&iquest;C&oacute;mo puedes decirle a tu hermano: &ldquo;D&eacute;jame sacarte la astilla del ojo&rdquo;, cuando ah&iacute; tienes una viga en el tuyo?<sup class="versenum">5&nbsp;</sup>&iexcl;Hip&oacute;crita!, saca primero la viga de tu propio ojo, y entonces ver&aacute;s con claridad para sacar la astilla del ojo de tu hermano.</p>

<p><sup class="versenum">6&nbsp;</sup>&raquo;No den lo sagrado a los perros, no sea que se vuelvan contra ustedes y los despedacen; ni echen sus perlas a los cerdos, no sea que las pisoteen.</p>

<h3>Pidan, busquen, llamen</h3>

<p><sup class="versenum">7&nbsp;</sup>&raquo;Pidan, y se les dar&aacute;; busquen, y encontrar&aacute;n; llamen, y se les abrir&aacute;.<sup class="versenum">8&nbsp;</sup>Porque todo el que pide, recibe; el que busca, encuentra; y al que llama, se le abre.</p>

<p><sup class="versenum">9&nbsp;</sup>&raquo;&iquest;Qui&eacute;n de ustedes, si su hijo le pide pan, le da una piedra?<sup class="versenum">10&nbsp;</sup>&iquest;O si le pide un pescado, le da una serpiente?<sup class="versenum">11&nbsp;</sup>Pues si ustedes, aun siendo malos, saben dar cosas buenas a sus hijos, &iexcl;cu&aacute;nto m&aacute;s su Padre que est&aacute; en el cielo dar&aacute; cosas buenas a los que le pidan!<sup class="versenum">12&nbsp;</sup>As&iacute; que en todo traten ustedes a los dem&aacute;s tal y como quieren que ellos los traten a ustedes. De hecho, esto es la ley y los profetas.</p>

<h3>La puerta estrecha y la puerta ancha</h3>

<p><sup class="versenum">13&nbsp;</sup>&raquo;Entren por la puerta estrecha. Porque es ancha la puerta y espacioso el camino que conduce a la destrucci&oacute;n, y muchos entran por ella.<sup class="versenum">14&nbsp;</sup>Pero estrecha es la puerta y angosto el camino que conduce a la vida, y son pocos los que la encuentran.</p>

<h3>El &aacute;rbol y sus frutos</h3>

<p><sup class="versenum">15&nbsp;</sup>&raquo;Cu&iacute;dense de los falsos profetas. Vienen a ustedes disfrazados de ovejas, pero por dentro son lobos feroces.<sup class="versenum">16&nbsp;</sup>Por sus frutos los conocer&aacute;n. &iquest;Acaso se recogen uvas de los espinos, o higos de los cardos?<sup class="versenum">17&nbsp;</sup>Del mismo modo, todo &aacute;rbol bueno da fruto bueno, pero el &aacute;rbol malo da fruto malo.<sup class="versenum">18&nbsp;</sup>Un &aacute;rbol bueno no puede dar fruto malo, y un &aacute;rbol malo no puede dar fruto bueno.<sup class="versenum">19&nbsp;</sup>Todo &aacute;rbol que no da buen fruto se corta y se arroja al fuego.<sup class="versenum">20&nbsp;</sup>As&iacute; que por sus frutos los conocer&aacute;n.</p>

<p><sup class="versenum">21&nbsp;</sup>&raquo;No todo el que me dice: &ldquo;Se&ntilde;or, Se&ntilde;or&rdquo;, entrar&aacute; en el reino de los cielos, sino solo el que hace la voluntad de mi Padre que est&aacute; en el cielo.<sup class="versenum">22&nbsp;</sup>Muchos me dir&aacute;n en aquel d&iacute;a: &ldquo;Se&ntilde;or, Se&ntilde;or, &iquest;no profetizamos en tu nombre, y en tu nombre expulsamos demonios e hicimos muchos milagros?&rdquo;<sup class="versenum">23&nbsp;</sup>Entonces les dir&eacute; claramente: &ldquo;Jam&aacute;s los conoc&iacute;. &iexcl;Al&eacute;jense de m&iacute;, hacedores de maldad!&rdquo;</p>

<h3>El prudente y el insensato</h3>

<p><sup class="versenum">24&nbsp;</sup>&raquo;Por tanto, todo el que me oye estas palabras y las pone en pr&aacute;ctica es como un hombre prudente que construy&oacute; su casa sobre la roca.<sup class="versenum">25&nbsp;</sup>Cayeron las lluvias, crecieron los r&iacute;os, y soplaron los vientos y azotaron aquella casa; con todo, la casa no se derrumb&oacute; porque estaba cimentada sobre la roca.<sup class="versenum">26&nbsp;</sup>Pero todo el que me oye estas palabras y no las pone en pr&aacute;ctica es como un hombre insensato que construy&oacute; su casa sobre la arena.<sup class="versenum">27&nbsp;</sup>Cayeron las lluvias, crecieron los r&iacute;os, soplaron los vientos y azotaron aquella casa. Esta se derrumb&oacute;, y grande fue su ruina&raquo;.</p>

<p><sup class="versenum">28&nbsp;</sup>Cuando Jes&uacute;s termin&oacute; de decir estas cosas, las multitudes se asombraron de su ense&ntilde;anza,<sup class="versenum">29&nbsp;</sup>porque les ense&ntilde;aba como quien ten&iacute;a autoridad, y no como los maestros de la ley.</p>

<p><sup class="versenum">1 </sup>Cuando Jes&uacute;s baj&oacute; de la monta&ntilde;a, lo siguieron grandes multitudes.</p>
<!-- end bible --></div>

<p>&nbsp;</p>

<ul>
</ul>

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

			<td class="social" @click="share('lesson', 'El plan del Padre: ', '/content/M2/spa/multiply2/multiply228.html')">
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