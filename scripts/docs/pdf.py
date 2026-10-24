from playwright.sync_api import sync_playwright
import pathlib
with sync_playwright() as p:
    b=p.chromium.launch()
    pg=b.new_page()
    for n in ["Calm-Touch_Pulse_meresi_modszertan","Calm-Touch_Pulse_belso_kezikonyv","Calm-Touch_Pulse_measurement_method_EN","Calm-Touch_Pulse_Messmethodik_DE"]:
        pg.goto(pathlib.Path(n+".html").resolve().as_uri()); pg.wait_for_timeout(500)
        pg.pdf(path=n+".pdf", format="A4", print_background=True, display_header_footer=True,
          header_template="<span></span>",
          footer_template="<div style='font-size:7pt;color:#5E6A62;width:100%;text-align:center;font-family:sans-serif'><span class='pageNumber'></span> / <span class='totalPages'></span></div>",
          margin={"top":"18mm","bottom":"18mm","left":"17mm","right":"17mm"})
    b.close()
