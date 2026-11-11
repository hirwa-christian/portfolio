export const manifest = {
  screens: {
    scr_psu14r: { name: "Hero", route: "/", position: { "x": 160, "y": 220 } },
    scr_c2i34q: { name: "About", route: "/#about", position: { "x": 1560, "y": 220 } },
    scr_c8e0v6: { name: "Skills", route: "/#skills", position: { "x": 2960, "y": 220 } },
    scr_vyrbgv: { name: "Experience", route: "/#experience", position: { "x": 4360, "y": 220 } },
    scr_y2c8m3: { name: "Projects", route: "/#projects", position: { "x": 5760, "y": 220 } },
    scr_nu1ph1: { name: "Education & Certs", route: "/#education", position: { "x": 7160, "y": 220 } },
    scr_u3zq1u: { name: "Contact", route: "/#contact", position: { "x": 8560, "y": 220 } }
  },
  sections: {
    sec_e773bi: { name: "Portfolio Site", x: 0, y: 0, width: 9920, height: 1180 }
  },
  layers: [
  { kind: "section", id: "sec_e773bi", children: [
    { kind: "screen", id: "scr_psu14r" },
    { kind: "screen", id: "scr_c2i34q" },
    { kind: "screen", id: "scr_c8e0v6" },
    { kind: "screen", id: "scr_vyrbgv" },
    { kind: "screen", id: "scr_y2c8m3" },
    { kind: "screen", id: "scr_nu1ph1" },
    { kind: "screen", id: "scr_u3zq1u" }]
  }]

};