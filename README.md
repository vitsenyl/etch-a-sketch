# Etch-a-Sketch

Built an ugly but functional etch-a-sketch using mostly HTML, CSS, and native JS. Getting a taste for how powerful JS can be for building dynamic webapps.

Grid functionality implemented with CSS Grid. 

## Lessons Learned
1. Can define CSS properties which can be modified by JS. Must use var() to reference said property.
```css
:root {--property: propertyvalue}
selector {something: var(--property)}
```
2. Can get and set CSS properties
```javascript
document.documentElement.style.getProperty(propertyName);
document.documentElement.style.setProperty(propertyName, newValue);
```
3. Using borders in CSS can actually slow performance with enough divisions (front-end performed faster with a background-color black and gaps in the grid)
4. Can use flexbox on a single element to center it 
```css
selector {
display: flex;
justify-content: center;
}
```
