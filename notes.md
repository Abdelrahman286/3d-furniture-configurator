# wawa 3d chair

- dribble
- fiber examples / staging models (car example)
- presentationControls

- drei/stage

- meshReflectorMaterial

- drei/float to animate the 3d object

- add visible={false} to mesh

```js
<mesh visible={false} />
```

- 3dTexture.me ---> it's free

- how to load the textures

```js
const leatherTexture = useTexture ({
    map : './basecolor'
    displacement :
    normalMap :

})
// to stretch the material
leatherTexture.map.repeat.set(2,2)
leatherTexture.roughness.repeat.set(2,2)
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
<meshStandardMaterial {...leatherTexture} >
```

## 🟩 To make a global context

- make a folder 'context`

```js
const CustomizationContext = createContext({});

export const CustomizationContextProvider = (props) => {
  const [material, setMaterial] = useState("leather");
  return <CustomizationContext.Provider value={{ material, setMaterial }} />;
  {
    props.children;
  }
  <CustomizationContext.Provider />;
};

// hook 
export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
```
- wrap the app inside the provider
```js 
<CustomizationContextProvider> 

<CustomizationContextProvider/>
 ```

-  TO use the context 
```js  
const {material, setMaterial } = useCustomization()
```


- use the context without useEffect 

-----------------

# To add new config option 

1) Add options list 
2) add state in global context 
3) handle it in App.jsx 
4) add conditional rendering in Model.jsx