exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 4975:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $47SRi$babelruntimehelpersextends = __webpack_require__(9651);
var $47SRi$react = __webpack_require__(8038);
var $47SRi$radixuireactcontext = __webpack_require__(5392);
var $47SRi$radixuireactcollection = __webpack_require__(3184);
var $47SRi$radixuireactcomposerefs = __webpack_require__(4788);
var $47SRi$radixuiprimitive = __webpack_require__(3010);
var $47SRi$radixuireactusecontrollablestate = __webpack_require__(1391);
var $47SRi$radixuireactprimitive = __webpack_require__(3393);
var $47SRi$radixuireactcollapsible = __webpack_require__(9275);
var $47SRi$radixuireactid = __webpack_require__(7616);
var $47SRi$radixuireactdirection = __webpack_require__(6884);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createAccordionScope", () => $0f4a20de0660bfd8$export$9748edc328a73be1);
$parcel$export(module.exports, "Accordion", () => $0f4a20de0660bfd8$export$a766cd26d0d69044);
$parcel$export(module.exports, "AccordionItem", () => $0f4a20de0660bfd8$export$d99097c13d4dac9f);
$parcel$export(module.exports, "AccordionHeader", () => $0f4a20de0660bfd8$export$5e3e5deaaf81ee41);
$parcel$export(module.exports, "AccordionTrigger", () => $0f4a20de0660bfd8$export$94e939b1f85bdd73);
$parcel$export(module.exports, "AccordionContent", () => $0f4a20de0660bfd8$export$985b9a77379b54a0);
$parcel$export(module.exports, "Root", () => $0f4a20de0660bfd8$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Item", () => $0f4a20de0660bfd8$export$6d08773d2e66f8f2);
$parcel$export(module.exports, "Header", () => $0f4a20de0660bfd8$export$8b251419efc915eb);
$parcel$export(module.exports, "Trigger", () => $0f4a20de0660bfd8$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Content", () => $0f4a20de0660bfd8$export$7c6e2c02157bb7d2);












/* -------------------------------------------------------------------------------------------------
 * Accordion
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$ACCORDION_NAME = 'Accordion';
const $0f4a20de0660bfd8$var$ACCORDION_KEYS = [
    'Home',
    'End',
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight'
];
const [$0f4a20de0660bfd8$var$Collection, $0f4a20de0660bfd8$var$useCollection, $0f4a20de0660bfd8$var$createCollectionScope] = $47SRi$radixuireactcollection.createCollection($0f4a20de0660bfd8$var$ACCORDION_NAME);
const [$0f4a20de0660bfd8$var$createAccordionContext, $0f4a20de0660bfd8$export$9748edc328a73be1] = $47SRi$radixuireactcontext.createContextScope($0f4a20de0660bfd8$var$ACCORDION_NAME, [
    $0f4a20de0660bfd8$var$createCollectionScope,
    $47SRi$radixuireactcollapsible.createCollapsibleScope
]);
const $0f4a20de0660bfd8$var$useCollapsibleScope = $47SRi$radixuireactcollapsible.createCollapsibleScope();
const $0f4a20de0660bfd8$export$a766cd26d0d69044 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { type: type , ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$Collection.Provider, {
        scope: props.__scopeAccordion
    }, type === 'multiple' ? /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImplMultiple, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, multipleProps, {
        ref: forwardedRef
    })) : /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImplSingle, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, singleProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$a766cd26d0d69044, {
    displayName: $0f4a20de0660bfd8$var$ACCORDION_NAME
});
$0f4a20de0660bfd8$export$a766cd26d0d69044.propTypes = {
    type (props) {
        const value = props.value || props.defaultValue;
        if (props.type && ![
            'single',
            'multiple'
        ].includes(props.type)) return new Error('Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.');
        if (props.type === 'multiple' && typeof value === 'string') return new Error('Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.');
        if (props.type === 'single' && Array.isArray(value)) return new Error('Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.');
        return null;
    }
};
/* -----------------------------------------------------------------------------------------------*/ const [$0f4a20de0660bfd8$var$AccordionValueProvider, $0f4a20de0660bfd8$var$useAccordionValueContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME);
const [$0f4a20de0660bfd8$var$AccordionCollapsibleProvider, $0f4a20de0660bfd8$var$useAccordionCollapsibleContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, {
    collapsible: false
});
const $0f4a20de0660bfd8$var$AccordionImplSingle = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange = ()=>{} , collapsible: collapsible = false , ...accordionSingleProps } = props;
    const [value, setValue] = $47SRi$radixuireactusecontrollablestate.useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value ? [
            value
        ] : [],
        onItemOpen: setValue,
        onItemClose: ($parcel$interopDefault($47SRi$react)).useCallback(()=>collapsible && setValue('')
        , [
            collapsible,
            setValue
        ])
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionCollapsibleProvider, {
        scope: props.__scopeAccordion,
        collapsible: collapsible
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImpl, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, accordionSingleProps, {
        ref: forwardedRef
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$AccordionImplMultiple = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { value: valueProp , defaultValue: defaultValue , onValueChange: onValueChange = ()=>{} , ...accordionMultipleProps } = props;
    const [value1 = [], setValue] = $47SRi$radixuireactusecontrollablestate.useControllableState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const handleItemOpen = ($parcel$interopDefault($47SRi$react)).useCallback((itemValue)=>setValue((prevValue = [])=>[
                ...prevValue,
                itemValue
            ]
        )
    , [
        setValue
    ]);
    const handleItemClose = ($parcel$interopDefault($47SRi$react)).useCallback((itemValue)=>setValue((prevValue = [])=>prevValue.filter((value)=>value !== itemValue
            )
        )
    , [
        setValue
    ]);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value1,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionCollapsibleProvider, {
        scope: props.__scopeAccordion,
        collapsible: true
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImpl, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, accordionMultipleProps, {
        ref: forwardedRef
    }))));
});
/* -----------------------------------------------------------------------------------------------*/ const [$0f4a20de0660bfd8$var$AccordionImplProvider, $0f4a20de0660bfd8$var$useAccordionContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME);
const $0f4a20de0660bfd8$var$AccordionImpl = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , disabled: disabled , dir: dir , orientation: orientation = 'vertical' , ...accordionProps } = props;
    const accordionRef = ($parcel$interopDefault($47SRi$react)).useRef(null);
    const composedRefs = $47SRi$radixuireactcomposerefs.useComposedRefs(accordionRef, forwardedRef);
    const getItems = $0f4a20de0660bfd8$var$useCollection(__scopeAccordion);
    const direction = $47SRi$radixuireactdirection.useDirection(dir);
    const isDirectionLTR = direction === 'ltr';
    const handleKeyDown = $47SRi$radixuiprimitive.composeEventHandlers(props.onKeyDown, (event)=>{
        var _triggerCollection$cl;
        if (!$0f4a20de0660bfd8$var$ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item)=>{
            var _item$ref$current;
            return !((_item$ref$current = item.ref.current) !== null && _item$ref$current !== void 0 && _item$ref$current.disabled);
        });
        const triggerIndex = triggerCollection.findIndex((item)=>item.ref.current === target
        );
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return; // Prevents page scroll while user is navigating
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = ()=>{
            nextIndex = triggerIndex + 1;
            if (nextIndex > endIndex) nextIndex = homeIndex;
        };
        const movePrev = ()=>{
            nextIndex = triggerIndex - 1;
            if (nextIndex < homeIndex) nextIndex = endIndex;
        };
        switch(event.key){
            case 'Home':
                nextIndex = homeIndex;
                break;
            case 'End':
                nextIndex = endIndex;
                break;
            case 'ArrowRight':
                if (orientation === 'horizontal') {
                    if (isDirectionLTR) moveNext();
                    else movePrev();
                }
                break;
            case 'ArrowDown':
                if (orientation === 'vertical') moveNext();
                break;
            case 'ArrowLeft':
                if (orientation === 'horizontal') {
                    if (isDirectionLTR) movePrev();
                    else moveNext();
                }
                break;
            case 'ArrowUp':
                if (orientation === 'vertical') movePrev();
                break;
        }
        const clampedIndex = nextIndex % triggerCount;
        (_triggerCollection$cl = triggerCollection[clampedIndex].ref.current) === null || _triggerCollection$cl === void 0 || _triggerCollection$cl.focus();
    });
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionImplProvider, {
        scope: __scopeAccordion,
        disabled: disabled,
        direction: dir,
        orientation: orientation
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$Collection.Slot, {
        scope: __scopeAccordion
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({}, accordionProps, {
        "data-orientation": orientation,
        ref: composedRefs,
        onKeyDown: disabled ? undefined : handleKeyDown
    }))));
});
/* -------------------------------------------------------------------------------------------------
 * AccordionItem
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$ITEM_NAME = 'AccordionItem';
const [$0f4a20de0660bfd8$var$AccordionItemProvider, $0f4a20de0660bfd8$var$useAccordionItemContext] = $0f4a20de0660bfd8$var$createAccordionContext($0f4a20de0660bfd8$var$ITEM_NAME);
/**
 * `AccordionItem` contains all of the parts of a collapsible section inside of an `Accordion`.
 */ const $0f4a20de0660bfd8$export$d99097c13d4dac9f = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , value: value , ...accordionItemProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ITEM_NAME, __scopeAccordion);
    const valueContext = $0f4a20de0660bfd8$var$useAccordionValueContext($0f4a20de0660bfd8$var$ITEM_NAME, __scopeAccordion);
    const collapsibleScope = $0f4a20de0660bfd8$var$useCollapsibleScope(__scopeAccordion);
    const triggerId = $47SRi$radixuireactid.useId();
    const open1 = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$AccordionItemProvider, {
        scope: __scopeAccordion,
        open: open1,
        disabled: disabled,
        triggerId: triggerId
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactcollapsible.Root, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        "data-orientation": accordionContext.orientation,
        "data-state": open1 ? 'open' : 'closed'
    }, collapsibleScope, accordionItemProps, {
        ref: forwardedRef,
        disabled: disabled,
        open: open1,
        onOpenChange: (open)=>{
            if (open) valueContext.onItemOpen(value);
            else valueContext.onItemClose(value);
        }
    })));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$d99097c13d4dac9f, {
    displayName: $0f4a20de0660bfd8$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AccordionHeader
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$HEADER_NAME = 'AccordionHeader';
/**
 * `AccordionHeader` contains the content for the parts of an `AccordionItem` that will be visible
 * whether or not its content is collapsed.
 */ const $0f4a20de0660bfd8$export$5e3e5deaaf81ee41 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , ...headerProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, __scopeAccordion);
    const itemContext = $0f4a20de0660bfd8$var$useAccordionItemContext($0f4a20de0660bfd8$var$HEADER_NAME, __scopeAccordion);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactprimitive.Primitive.h3, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        "data-orientation": accordionContext.orientation,
        "data-state": $0f4a20de0660bfd8$var$getState(itemContext.open),
        "data-disabled": itemContext.disabled ? '' : undefined
    }, headerProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$5e3e5deaaf81ee41, {
    displayName: $0f4a20de0660bfd8$var$HEADER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AccordionTrigger
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$TRIGGER_NAME = 'AccordionTrigger';
/**
 * `AccordionTrigger` is the trigger that toggles the collapsed state of an `AccordionItem`. It
 * should always be nested inside of an `AccordionHeader`.
 */ const $0f4a20de0660bfd8$export$94e939b1f85bdd73 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , ...triggerProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, __scopeAccordion);
    const itemContext = $0f4a20de0660bfd8$var$useAccordionItemContext($0f4a20de0660bfd8$var$TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = $0f4a20de0660bfd8$var$useAccordionCollapsibleContext($0f4a20de0660bfd8$var$TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = $0f4a20de0660bfd8$var$useCollapsibleScope(__scopeAccordion);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($0f4a20de0660bfd8$var$Collection.ItemSlot, {
        scope: __scopeAccordion
    }, /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactcollapsible.Trigger, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || undefined,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId
    }, collapsibleScope, triggerProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$94e939b1f85bdd73, {
    displayName: $0f4a20de0660bfd8$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * AccordionContent
 * -----------------------------------------------------------------------------------------------*/ const $0f4a20de0660bfd8$var$CONTENT_NAME = 'AccordionContent';
/**
 * `AccordionContent` contains the collapsible content for an `AccordionItem`.
 */ const $0f4a20de0660bfd8$export$985b9a77379b54a0 = /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion: __scopeAccordion , ...contentProps } = props;
    const accordionContext = $0f4a20de0660bfd8$var$useAccordionContext($0f4a20de0660bfd8$var$ACCORDION_NAME, __scopeAccordion);
    const itemContext = $0f4a20de0660bfd8$var$useAccordionItemContext($0f4a20de0660bfd8$var$CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = $0f4a20de0660bfd8$var$useCollapsibleScope(__scopeAccordion);
    return /*#__PURE__*/ ($parcel$interopDefault($47SRi$react)).createElement($47SRi$radixuireactcollapsible.Content, ($parcel$interopDefault($47SRi$babelruntimehelpersextends))({
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation
    }, collapsibleScope, contentProps, {
        ref: forwardedRef,
        style: {
            ['--radix-accordion-content-height']: 'var(--radix-collapsible-content-height)',
            ['--radix-accordion-content-width']: 'var(--radix-collapsible-content-width)',
            ...props.style
        }
    }));
});
/*#__PURE__*/ Object.assign($0f4a20de0660bfd8$export$985b9a77379b54a0, {
    displayName: $0f4a20de0660bfd8$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ function $0f4a20de0660bfd8$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $0f4a20de0660bfd8$export$be92b6f5f03c0fe9 = $0f4a20de0660bfd8$export$a766cd26d0d69044;
const $0f4a20de0660bfd8$export$6d08773d2e66f8f2 = $0f4a20de0660bfd8$export$d99097c13d4dac9f;
const $0f4a20de0660bfd8$export$8b251419efc915eb = $0f4a20de0660bfd8$export$5e3e5deaaf81ee41;
const $0f4a20de0660bfd8$export$41fb9f06171c75f4 = $0f4a20de0660bfd8$export$94e939b1f85bdd73;
const $0f4a20de0660bfd8$export$7c6e2c02157bb7d2 = $0f4a20de0660bfd8$export$985b9a77379b54a0;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9275:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $f0mF1$babelruntimehelpersextends = __webpack_require__(9651);
var $f0mF1$react = __webpack_require__(8038);
var $f0mF1$radixuiprimitive = __webpack_require__(3010);
var $f0mF1$radixuireactcontext = __webpack_require__(5392);
var $f0mF1$radixuireactusecontrollablestate = __webpack_require__(1391);
var $f0mF1$radixuireactuselayouteffect = __webpack_require__(6983);
var $f0mF1$radixuireactcomposerefs = __webpack_require__(4788);
var $f0mF1$radixuireactprimitive = __webpack_require__(3393);
var $f0mF1$radixuireactpresence = __webpack_require__(7343);
var $f0mF1$radixuireactid = __webpack_require__(7616);

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "createCollapsibleScope", () => $e729681ae85df948$export$952b32dcbe73087a);
$parcel$export(module.exports, "Collapsible", () => $e729681ae85df948$export$6eb0f7ddcda6131f);
$parcel$export(module.exports, "CollapsibleTrigger", () => $e729681ae85df948$export$c135dce7b15bbbdc);
$parcel$export(module.exports, "CollapsibleContent", () => $e729681ae85df948$export$aadde00976f34151);
$parcel$export(module.exports, "Root", () => $e729681ae85df948$export$be92b6f5f03c0fe9);
$parcel$export(module.exports, "Trigger", () => $e729681ae85df948$export$41fb9f06171c75f4);
$parcel$export(module.exports, "Content", () => $e729681ae85df948$export$7c6e2c02157bb7d2);










/* -------------------------------------------------------------------------------------------------
 * Collapsible
 * -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$COLLAPSIBLE_NAME = 'Collapsible';
const [$e729681ae85df948$var$createCollapsibleContext, $e729681ae85df948$export$952b32dcbe73087a] = $f0mF1$radixuireactcontext.createContextScope($e729681ae85df948$var$COLLAPSIBLE_NAME);
const [$e729681ae85df948$var$CollapsibleProvider, $e729681ae85df948$var$useCollapsibleContext] = $e729681ae85df948$var$createCollapsibleContext($e729681ae85df948$var$COLLAPSIBLE_NAME);
const $e729681ae85df948$export$6eb0f7ddcda6131f = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible: __scopeCollapsible , open: openProp , defaultOpen: defaultOpen , disabled: disabled , onOpenChange: onOpenChange , ...collapsibleProps } = props;
    const [open = false, setOpen] = $f0mF1$radixuireactusecontrollablestate.useControllableState({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /*#__PURE__*/ $f0mF1$react.createElement($e729681ae85df948$var$CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled: disabled,
        contentId: $f0mF1$radixuireactid.useId(),
        open: open,
        onOpenToggle: $f0mF1$react.useCallback(()=>setOpen((prevOpen)=>!prevOpen
            )
        , [
            setOpen
        ])
    }, /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({
        "data-state": $e729681ae85df948$var$getState(open),
        "data-disabled": disabled ? '' : undefined
    }, collapsibleProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($e729681ae85df948$export$6eb0f7ddcda6131f, {
    displayName: $e729681ae85df948$var$COLLAPSIBLE_NAME
});
/* -------------------------------------------------------------------------------------------------
 * CollapsibleTrigger
 * -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$TRIGGER_NAME = 'CollapsibleTrigger';
const $e729681ae85df948$export$c135dce7b15bbbdc = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible: __scopeCollapsible , ...triggerProps } = props;
    const context = $e729681ae85df948$var$useCollapsibleContext($e729681ae85df948$var$TRIGGER_NAME, __scopeCollapsible);
    return /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactprimitive.Primitive.button, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": $e729681ae85df948$var$getState(context.open),
        "data-disabled": context.disabled ? '' : undefined,
        disabled: context.disabled
    }, triggerProps, {
        ref: forwardedRef,
        onClick: $f0mF1$radixuiprimitive.composeEventHandlers(props.onClick, context.onOpenToggle)
    }));
});
/*#__PURE__*/ Object.assign($e729681ae85df948$export$c135dce7b15bbbdc, {
    displayName: $e729681ae85df948$var$TRIGGER_NAME
});
/* -------------------------------------------------------------------------------------------------
 * CollapsibleContent
 * -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$CONTENT_NAME = 'CollapsibleContent';
const $e729681ae85df948$export$aadde00976f34151 = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { forceMount: forceMount , ...contentProps } = props;
    const context = $e729681ae85df948$var$useCollapsibleContext($e729681ae85df948$var$CONTENT_NAME, props.__scopeCollapsible);
    return /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactpresence.Presence, {
        present: forceMount || context.open
    }, ({ present: present  })=>/*#__PURE__*/ $f0mF1$react.createElement($e729681ae85df948$var$CollapsibleContentImpl, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({}, contentProps, {
            ref: forwardedRef,
            present: present
        }))
    );
});
/*#__PURE__*/ Object.assign($e729681ae85df948$export$aadde00976f34151, {
    displayName: $e729681ae85df948$var$CONTENT_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $e729681ae85df948$var$CollapsibleContentImpl = /*#__PURE__*/ $f0mF1$react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible: __scopeCollapsible , present: present , children: children , ...contentProps } = props;
    const context = $e729681ae85df948$var$useCollapsibleContext($e729681ae85df948$var$CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = $f0mF1$react.useState(present);
    const ref = $f0mF1$react.useRef(null);
    const composedRefs = $f0mF1$radixuireactcomposerefs.useComposedRefs(forwardedRef, ref);
    const heightRef = $f0mF1$react.useRef(0);
    const height = heightRef.current;
    const widthRef = $f0mF1$react.useRef(0);
    const width = widthRef.current; // when opening we want it to immediately open to retrieve dimensions
    // when closing we delay `present` to retrieve dimensions before closing
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = $f0mF1$react.useRef(isOpen);
    const originalStylesRef = $f0mF1$react.useRef();
    $f0mF1$react.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false
        );
        return ()=>cancelAnimationFrame(rAF)
        ;
    }, []);
    $f0mF1$radixuireactuselayouteffect.useLayoutEffect(()=>{
        const node = ref.current;
        if (node) {
            originalStylesRef.current = originalStylesRef.current || {
                transitionDuration: node.style.transitionDuration,
                animationName: node.style.animationName
            }; // block any animations/transitions so the element renders at its full dimensions
            node.style.transitionDuration = '0s';
            node.style.animationName = 'none'; // get width and height from full dimensions
            const rect = node.getBoundingClientRect();
            heightRef.current = rect.height;
            widthRef.current = rect.width; // kick off any animations/transitions that were originally set up if it isn't the initial mount
            if (!isMountAnimationPreventedRef.current) {
                node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                node.style.animationName = originalStylesRef.current.animationName;
            }
            setIsPresent(present);
        }
    /**
     * depends on `context.open` because it will change to `false`
     * when a close is triggered but `present` will be `false` on
     * animation end (so when close finishes). This allows us to
     * retrieve the dimensions *before* closing.
     */ }, [
        context.open,
        present
    ]);
    return /*#__PURE__*/ $f0mF1$react.createElement($f0mF1$radixuireactprimitive.Primitive.div, ($parcel$interopDefault($f0mF1$babelruntimehelpersextends))({
        "data-state": $e729681ae85df948$var$getState(context.open),
        "data-disabled": context.disabled ? '' : undefined,
        id: context.contentId,
        hidden: !isOpen
    }, contentProps, {
        ref: composedRefs,
        style: {
            [`--radix-collapsible-content-height`]: height ? `${height}px` : undefined,
            [`--radix-collapsible-content-width`]: width ? `${width}px` : undefined,
            ...props.style
        }
    }), isOpen && children);
});
/* -----------------------------------------------------------------------------------------------*/ function $e729681ae85df948$var$getState(open) {
    return open ? 'open' : 'closed';
}
const $e729681ae85df948$export$be92b6f5f03c0fe9 = $e729681ae85df948$export$6eb0f7ddcda6131f;
const $e729681ae85df948$export$41fb9f06171c75f4 = $e729681ae85df948$export$c135dce7b15bbbdc;
const $e729681ae85df948$export$7c6e2c02157bb7d2 = $e729681ae85df948$export$aadde00976f34151;




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4311:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.BS = exports.JH = void 0;
/**
 * Get best-looking default options for most elements for a given playMode.
 */
const getDefaultOptions = (playMode = 'always') => {
    return {
        playMode,
        createContainers: true,
        hideOverflow: false,
        timing: playMode === 'always' ? { duration: 2 * 1000, iterations: Infinity } : { duration: 250, iterations: 1 },
        glitchTimeSpan: playMode === 'always' ? { start: 0.5, end: 0.7 } : { start: 0, end: 1, },
        shake: {
            velocity: 15,
            amplitudeX: 0.2,
            amplitudeY: 0.2,
        },
        slice: playMode === 'click' ? {
            count: 15,
            velocity: 20,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
        } : {
            count: 6,
            velocity: 15,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
        },
        pulse: false,
    };
};
/**
 * Glitch factor function, returns a value between 0 and 1 telling how much the animation should glitch at a given stepPct.
 */
const getGlitchFactor = (options, stepPct) => {
    if (!options.glitchTimeSpan) {
        return 1;
    }
    const glitchStart = options.glitchTimeSpan.start;
    const glitchEnd = options.glitchTimeSpan.end;
    if (stepPct < glitchStart || stepPct > glitchEnd) {
        return 0;
    }
    const glitchPeak = glitchStart + (glitchEnd - glitchStart) / 2;
    if (stepPct < glitchPeak) {
        return (stepPct - glitchStart) / (glitchPeak - glitchStart);
    }
    else {
        return (glitchEnd - stepPct) / (glitchEnd - glitchPeak);
    }
};
/**
 * Get a random value between -1 and 1, which biases towards the center if the animation should not glitch at the given `stepPct` moment.
 */
const getGlitchRandom = (options, stepPct) => {
    return (Math.random() - .5) * 2 * getGlitchFactor(options, stepPct);
};
/**
 * Get a random rectangle values in % to glitch. Percent values are between 0 and 100. Returns the rectangle as a CSS polygon.
 * @param minHeight Minimum height of the rectangle in percent, between 0 and 1.
 * @param maxHeight Maximum height of the rectangle in percent, between 0 and 1.
 * @param minWidth Minimum width of the rectangle in percent, between 0 and 1.
 * @param maxWidth Maximum width of the rectangle in percent, between 0 and 1.
 */
const getRandomRectanglePolygonCss = ({ minHeight, maxHeight, minWidth, maxWidth }) => {
    const height = Math.floor(Math.random() * ((maxHeight - minHeight) * 100 + 1)) + minHeight * 100;
    const width = Math.floor(Math.random() * ((maxWidth - minWidth) * 100 + 1)) + minWidth * 100;
    // Put this rectangle somewhere in the container so that it does not go out of the screen.
    const top = Math.floor(Math.random() * (100 - height));
    const left = Math.floor(Math.random() * (100 - width));
    const topRight = `${left + width}% ${top}%`;
    const bottomRight = `${left + width}% ${top + height}%`;
    const bottomLeft = `${left}% ${top + height}%`;
    const topLeft = `${left}% ${top}%`;
    return `polygon(${topRight},${bottomRight},${bottomLeft},${topLeft})`;
};
/**
 * Generate a slice layer, slicing part of the element and moving it somwhere else.
 * @param options
 */
const generateGlitchSliceLayer = (options) => {
    const stepCount = Math.floor(options.slice.velocity * options.timing.duration / 1000) + 1;
    const steps = [];
    for (let index = 0; index < stepCount; ++index) {
        if (getGlitchFactor(options, index / stepCount) === 0) {
            steps.push({
                opacity: '0',
                transform: 'none',
                clipPath: 'unset',
            });
            continue;
        }
        const translateX = getGlitchRandom(options, index / stepCount) * 30;
        const styles = {
            opacity: '1',
            transform: `translate3d(${translateX}%,0,0)`,
            clipPath: getRandomRectanglePolygonCss({ minHeight: options.slice.minHeight, maxHeight: options.slice.maxHeight, minWidth: 1, maxWidth: 1 }),
        };
        if (options.slice.hueRotate) {
            styles.filter = `hue-rotate(${Math.floor(getGlitchRandom(options, index / stepCount) * 360)}deg)`;
        }
        steps.push(styles);
    }
    return {
        steps,
        timing: Object.assign({ easing: `steps(${stepCount},jump-start)` }, options.timing),
    };
};
/**
 * Generate a pulse layer, a single transparent and growing layer.
 * @param options
 */
const generateGlitchPulseLayer = (options) => {
    return !options.pulse ? null : {
        steps: [
            { transform: 'scale(1)', opacity: '1', },
            { transform: `scale(${options.pulse.scale})`, opacity: '0', },
        ],
        timing: Object.assign(Object.assign({}, options.timing), { delay: (options.glitchTimeSpan ? options.glitchTimeSpan.start : 0) * options.timing.duration, easing: 'ease-in-out' }),
    };
};
/**
 * Generate the base layer, which may or may not shake depending on the options.
 * @param options
 */
const generateBaseLayer = (options) => {
    if (!options.shake) {
        return { steps: [], timing: {} };
    }
    const stepCount = Math.floor(options.shake.velocity * options.timing.duration / 1000) + 1;
    const steps = [];
    for (let index = 0; index < stepCount; ++index) {
        const translateX = getGlitchRandom(options, index / stepCount) * options.shake.amplitudeX * 100;
        const translateY = getGlitchRandom(options, index / stepCount) * options.shake.amplitudeY * 100;
        steps.push({
            transform: `translate3d(${translateX}%,${translateY}%,0)`,
        });
    }
    return {
        steps,
        timing: Object.assign({ easing: `steps(${stepCount},jump-start)` }, options.timing),
    };
};
/**
 * Generate the layers that deterministically define a glitch animation for the specified options.
 */
const generateLayers = (options) => [
    generateBaseLayer(options),
    generateGlitchPulseLayer(options),
    ...Array.from({ length: options.slice.count }).map(() => generateGlitchSliceLayer(options)),
].filter(entry => entry !== null);
/**
* Performs a deep merge of option objects and returns new object. Does not modify
* objects (immutable) and will ignore arrays.
* @param objects - Objects to merge
* @returns New object with merged key/values
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeOptions = (...objects) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isObject = (obj) => obj && typeof obj === 'object';
    return objects.reduce((prev, obj) => {
        Object.keys(obj)
            .forEach(key => {
            if (isObject(prev[key]) && isObject(obj[key])) {
                prev[key] = (0, exports.JH)(prev[key], obj[key]);
            }
            else if (obj[key] !== undefined) {
                prev[key] = obj[key];
            }
        });
        return prev;
    }, {});
};
exports.JH = mergeOptions;
/**
 * Prepare the DOM to set up the glitch effect.
 * @remarks
 * Depending on the element state:
 *  - Whether it was glitched before or not,
 *  - Whether current element display attributes
 *  - Whether options.createContainers is true/false
 * The top-level container and layer containers might be different objects and might need to be created.
 * @param element
 * @param options
 * @returns
 */
const prepareGlitchElement = (element, options) => {
    var _a, _b;
    // If not creating the containers
    if (!options.createContainers) {
        return {
            container: element,
            layersContainer: element,
            glitched: element.firstElementChild,
        };
    }
    // If first glitch
    if (!element.dataset.glitched) {
        // Setup the layer container using grid to stack elements
        const layersContainer = document.createElement('div');
        // If current element is an inline element
        const container = document.createElement('div');
        if (getComputedStyle(element).getPropertyValue('display').match(/^inline/)) {
            container.style.display = 'inline-block';
        }
        // Add the layers container to the global container
        container.appendChild(layersContainer);
        // Replace element with the new container
        (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(container, element);
        layersContainer.prepend(element);
        return {
            container,
            layersContainer,
            glitched: element,
        };
    }
    // Not first glitch, with createContainers=true
    const layersContainer = element.parentElement;
    const container = (_b = element.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    // Remove all glitch layers but keep the first one (which is the original element)
    while (layersContainer.children.length > 1) {
        layersContainer.removeChild(layersContainer.children[1]);
    }
    // Cancel the animation on the first layer
    layersContainer.firstElementChild.getAnimations().forEach(animation => animation.cancel());
    return {
        container,
        layersContainer,
        glitched: element,
    };
};
/**
 * Given a set of computed layers and user options, glitch a given element
 * @param element
 * @param layers
 * @param options
 */
const glitchElement = (element, layers, options) => {
    const { glitched, container, layersContainer } = prepareGlitchElement(element, options);
    // Force grid display on the layer container
    layersContainer.style.display = 'grid';
    // Overflow
    if (options.hideOverflow) {
        container.style.overflow = 'hidden';
    }
    // If setting HTML manually
    if (options.html) {
        glitched.innerHTML = options.html;
    }
    // Stack original element too (it is used as the base shaking layer)
    glitched.style.gridArea = '1/1/-1/-1';
    // Base layer
    const baseLayer = glitched.cloneNode(true);
    // Stack this layer
    baseLayer.style.gridArea = '1/1/-1/-1';
    baseLayer.style.userSelect = 'none';
    baseLayer.style.pointerEvents = 'none';
    baseLayer.style.opacity = '0';
    for (let i = 0; i < layers.length - 1; ++i) {
        const layerDiv = baseLayer.cloneNode(true);
        layersContainer.appendChild(layerDiv);
    }
    // Glitch control functions
    const startGlitch = () => {
        layers.forEach((layer, i) => {
            layersContainer
                .children[i]
                .animate(layer.steps, layer.timing);
        });
    };
    const stopGlitch = () => {
        layers.forEach((_, i) => {
            layersContainer
                .children[i]
                .getAnimations()
                .forEach(animation => {
                animation.cancel();
            });
        });
    };
    // Depending on the selected play mode, orchestrate when to start/stop the glitch
    container.onmouseenter = null;
    container.onmouseleave = null;
    container.onclick = null;
    switch (options.playMode) {
        case 'always':
            startGlitch();
            break;
        case 'hover':
            container.onmouseenter = startGlitch;
            container.onmouseleave = stopGlitch;
            break;
        case 'click':
            container.onclick = () => { stopGlitch(); startGlitch(); };
            break;
    }
    // Mark the glitched element as glitched for next round
    element.dataset.glitched = '1';
    return { container, startGlitch, stopGlitch };
};
/**
 * Make a single element glitch.
 * @param elOrSelector What to glitch. Can be a query selector, a list of HTMLElement, an HTMLElement or a NodeList.
 * @param userOptions Optional glitch customization options.
 */
const glitch = (elOrSelector = '.powerglitch', userOptions = {}) => {
    // Fix options with defaults
    const options = (0, exports.JH)(getDefaultOptions(userOptions.playMode), userOptions);
    // Find elements to glitch
    let elements = [];
    if (typeof elOrSelector === 'string') {
        elements = Array.from(document.querySelectorAll(elOrSelector));
    }
    else if (elOrSelector instanceof NodeList) {
        elements = Array.from(elOrSelector);
    }
    else if (Array.isArray(elOrSelector)) {
        elements = elOrSelector;
    }
    else if (elOrSelector instanceof HTMLElement) {
        elements = [elOrSelector];
    }
    // Generate all animation layers
    const layers = generateLayers(options);
    // Animate each div element
    const entries = elements.map(element => glitchElement(element, layers, options));
    // Return list of containers and glitch control functions
    return {
        containers: entries.map(entry => entry.container),
        startGlitch: () => entries.forEach(entry => entry.startGlitch()),
        stopGlitch: () => entries.forEach(entry => entry.stopGlitch()),
    };
};
exports.BS = {
    glitch,
    generateLayers,
    getDefaultOptions,
};


/***/ })

};
;